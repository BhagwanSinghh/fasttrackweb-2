import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { any, arrayOf, bool, number, oneOf, oneOfType, string } from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import ErrorLayout from './error-layout';
import PrivateLayout from './private-layout';
import PublicLayout from './public-layout';
import { getCustomerCredit } from '../services/api/api.service';

const SingleRoute = ({ accessible, userAccess, component: Component, type, userValidate, ...rest }) => {
  const { token, userDetail } = useSelector((store) => ({
    token: store.user.token,
    userDetail: store.user.userDetail,
  }));

  // const customer_id = useSelector((e)=>{
  //   return e.user.userDetail.userId
  // })
  // console.log(customer_id)
  // const [userAccess, setUserAcess] = useState(false)
  // useEffect((e)=>{
  //   getCustomerCredit(customer_id)
  //   .then((e)=>{
  //     console.log('====================',e)
  //     if(e.data.status == 200) {
  //       setUserAcess(true)
  //     }
  //   })
  //   .catch((e)=>console.log(e))
  // },[])

  // if (type === 'public' && token) {
  //   return <Redirect from={rest.path} to="/dashboard" />;
  // }

  if (token && rest.path == '/login') {
    return <Redirect to="/dashboard" />;
  }

  if (!userAccess && token && userValidate) {
    return <Redirect from={rest.path} to="/pricing-plans" />;
  }

  //console.log('userAccesskdsjgfkjsdgkfjgds', token);
  if (type === 'private' && !token) {
    return <Redirect from={rest.path} to="/login" />;
  }

  // if (type === 'private' && token && !accessible?.includes(userDetail.user_type_id)) {
  //   return <Redirect from={rest.path} to="/forbidden-access" />;
  // }

  let Layout = PublicLayout;

  if (type === 'private') {
    Layout = PrivateLayout;
  } else if (type === 'error') {
    Layout = ErrorLayout;
  }

  return (
    <Route
      path={rest.path}
      render={() => (
        <Layout {...rest}>
          <Component {...rest} />
        </Layout>
      )}
      {...rest}
    />
  );
};

SingleRoute.propTypes = {
  accessible: arrayOf(number),
  component: any.isRequired,
  exact: bool.isRequired,
  path: oneOfType([arrayOf(string).isRequired, string.isRequired]).isRequired,
  title: string.isRequired,
  type: oneOf(['public', 'private', 'error']).isRequired,
};
SingleRoute.defaultProps = { accessible: null };
export default SingleRoute;

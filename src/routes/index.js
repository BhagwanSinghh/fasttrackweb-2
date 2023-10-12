import React, { useEffect, useState } from 'react';
import { Switch } from 'react-router-dom';
import configureRoutes from './routes';
import SingleRoute from './single-route';
import { getCustomerCredit } from '../services/api/api.service';
import { useSelector } from 'react-redux';

const Routes = () => {
  const routes = configureRoutes();

  const { token, userDetail } = useSelector((store) => ({
    token: store.user.token,
    userDetail: store.user.userDetail,
  }));

  const customer_id = useSelector((e) => {
    console.log(e);
    if(e.user.userDetail!=null){
      return e.user.userDetail.userId;
    }
  });
  console.log(customer_id);

  const [userAccess, setUserAcess] = useState(false);

  getCustomerCredit(customer_id)
    .then((e) => {
    //  console.log('====================', e);
      if (e.data.status == 200) {
        setUserAcess(true);
      }
    })
    .catch((e) => console.log(e));

  return (
    <Switch>
      {routes.map((route) => (
        <SingleRoute exact key={route.path} userAccess={userAccess} {...route} />
      ))}
    </Switch>
  );
};

export default Routes;

import React from 'react';
import { Helmet } from 'react-helmet';
//import Slider from 'react-slick';
import { any, func, string } from 'prop-types';
import { Slide } from '../components';
import { Drawer, Footer, Header } from '../components';
import { useSelector } from 'react-redux';
import { USER_SCHOOL_ADMIN, USER_PARENT, USER_STUDENT, USER_TEACHER } from '../constants';

const NextButton = (props) => {
  const {
    className, style, onClick,
  } = props;

  return (
    <button
      onClick={onClick}
      aria-label="Next"
      type="button"
      className={className}
      style={style}
    >
      Next
    </button>
  );
};

const BackButton = (props) => {
  const {
    className, style, onClick,
  } = props;

  return (
    <button
      onClick={onClick}
      aria-label="Back"
      type="button"
      className={className}
      style={style}
    >
      Back
    </button>
  );
};

const settings = {
  autoplay: true,
  autoplaySpeed: 5000,
  dots: true,
  fade: true,
  infinite: true,
  nextArrow: <NextButton />,
  pauseOnHover: true,
  prevArrow: <BackButton />,
  slidesToScroll: 1,
  slidesToShow: 1,
  speed: 500,
};

const PublicLayout = ({
  children, title,
}) => {
  const {
    activeDrawerMenu, drawer, user,
  } = useSelector((store) => ({
    activeDrawerMenu: store.app.activeDrawerMenu,
    drawer: store.app.drawer,
    login: false,
    user: store.user.userDetail || {},
  }));
  const isDrawerOpen = drawer === 'visible';
  const drawerClass = isDrawerOpen ? '' : 'closed-sidebar';
  const schoolName = [USER_SCHOOL_ADMIN, USER_PARENT, USER_STUDENT, USER_TEACHER].includes(user?.user_type_id) ? user.name.capitalizeEachLetter() : '';
  console.log('usr',user)
  return (
  <div className="app-container app-theme-white body-tabs-shadow">
    <Helmet>
      <title>{title} | Retro Packers and Movers Private Limited</title>
    </Helmet>
    <Header user={user} />
    {children}
    <Footer />
  </div>
)};

PublicLayout.propTypes = {
  children: any.isRequired,
  title: string.isRequired,
};

BackButton.propTypes = {
  className: string.isRequired,
  onClick: func.isRequired,
  style: string.isRequired,
};

NextButton.propTypes = {
  className: string.isRequired,
  onClick: func.isRequired,
  style: string.isRequired,
};

export default PublicLayout;

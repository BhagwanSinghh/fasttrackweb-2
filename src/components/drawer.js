import React from 'react';
import { useDispatch } from 'react-redux';
import { shape, string } from 'prop-types';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Button from './button';
import { toggleDrawerMenu } from '../actions/app-action-types';
import { USER_SUPER_ADMIN, USER_SCHOOL_ADMIN } from '../constants';

const Drawer = ({
  activeDrawerMenu, user,
}) => {
  const location = useLocation();
  const dispatch = useDispatch();

  const onClick = (payload) => {
    const activeMenu = payload === activeDrawerMenu ? null : payload;

    dispatch(toggleDrawerMenu(activeMenu));
  };

  const onLinkClick = (event) => {
    dispatch(toggleDrawerMenu(null));

    event.preventDefault();
  };

  const getActive = (url) => {
    const activePathname = location.pathname;

    return activePathname.indexOf(url) > -1;
  };

  const onDropDownHide = () => {
    dispatch(toggleDrawerMenu(null));
  };

  // const onDropDownShow = (payload) => {
  //   const activeMenu = payload === activeDrawerMenu ? null : payload;

  //   dispatch(toggleDrawerMenu(activeMenu));
  // };

  return (
    <div className="app-sidebar inner_area">
      <div className="app-header__logo">
        <div className="logo-src" />
        <div className="header__pane ml-auto">
          <div>
            <Button onClick={() => {}} type="button" className="hamburger close-sidebar-btn hamburger--elastic">
              <span className="hamburger-box">
                <span className="hamburger-inner" />
              </span>
            </Button>
          </div>
        </div>
      </div>

      <div className="scrollbar-sidebar">
        <div className="app-sidebar__inner">
          <ul className="vertical-nav-menu mt-4">
            <li>
              <NavLink to={'/post-jobs'}>Post Jobs</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

Drawer.propTypes = {
  activeDrawerMenu: string,
  user: shape({ name: string.isRequired }),
};

Drawer.defaultProps = {
  activeDrawerMenu: null,
  user: null,
};

export default Drawer;

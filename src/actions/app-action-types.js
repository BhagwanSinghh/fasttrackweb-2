import { createAction } from 'redux-actions';

export const HIDE_LOADER = 'HIDE_LOADER';
export const hideLoader = createAction(HIDE_LOADER);

export const SHOW_LOADER = 'SHOW_LOADER';
export const showLoader = createAction(SHOW_LOADER);

export const SHOW_TOAST = 'SHOW_TOAST';
export const showToast = createAction(SHOW_TOAST);

export const TOGGLE_DRAWER = 'TOGGLE_DRAWER';
export const toggleDrawer = createAction(TOGGLE_DRAWER);

export const TOGGLE_DRAWER_MENU = 'TOGGLE_DRAWER_MENU';
export const toggleDrawerMenu = createAction(TOGGLE_DRAWER_MENU);

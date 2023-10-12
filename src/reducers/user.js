import {
  LOGIN_FAILURE,
  LOGIN_REQUESTED,
  LOGIN_SUCCESS,
  LOGOUT_FAILURE,
  LOGOUT_REQUESTED,
  LOGOUT_SUCCESS,
  GENERATE_OTP,
  GENERATE_OTP_SUCCESS,
  GENERATE_OTP_FAILURE,
  GENERATE_OTP_REQUESTED,
  FETCH_MY_PROFILE_DETAIL_FAILURE,
  FETCH_MY_PROFILE_DETAIL_REQUESTED,
  FETCH_MY_PROFILE_DETAIL_SUCCESS
} from '../actions/user-action-types';

const initialState = {
  fetchProfileStatus: 'pending',
  loginStatus: 'pending',
  logoutStatus: 'pending',
  token: null,
  userDetail: {},
  message: null
};

export default function app(state = initialState, {
  payload, type,
}) {
  switch (type) {
    case FETCH_MY_PROFILE_DETAIL_FAILURE:
      return {
        ...state,
        fetchProfileStatus: 'failure',
      };

    case FETCH_MY_PROFILE_DETAIL_REQUESTED:
      return {
        ...state,
        fetchProfileStatus: 'logout',
      };

    case FETCH_MY_PROFILE_DETAIL_SUCCESS:
      return {
        ...state,
        fetchProfileStatus: 'success',
        userDetail: {
          ...state.userDetail,
          ...payload,
        },
      };

    case GENERATE_OTP:
      return {
        ...state,
        isOtpSend: true,
        otpSent: false,
        otpSend: 'success',
      };


    case GENERATE_OTP_FAILURE:
      return {
        ...state,
        otpSent: false,
      };

    case GENERATE_OTP_REQUESTED:
      return {
        ...state,
        otpSent: false
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        loginStatus: 'failure',
        message : payload
      };

    case LOGIN_REQUESTED:
      return {
        ...state,
        loginStatus: 'logging',
        otpSent: true,
        userDetail: null,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthorized: true,
        otpSent: true,
        loginStatus: 'success',
        message: null,
        token: payload.token ? payload.token : null,
        userDetail: {
          userId: payload ? payload.userId : null,
          location: payload ? payload.location : null,
          userName: payload ? payload.userName : null
        }
      };
    case GENERATE_OTP_SUCCESS:
      return {
        ...state,
        otpSent: true,
        tempToken: payload ? payload : null
      };

    case LOGOUT_FAILURE:
      return {
        ...state,
        logoutStatus: 'failure',
      };

    case LOGOUT_REQUESTED:
      return {
        ...state,
        logoutStatus: 'logout',
      };

    case LOGOUT_SUCCESS:
      return {
        ...state,
        logoutStatus: 'success',
        token: null,
        userDetail: {},
      };

    default:
      return state;
  }
}

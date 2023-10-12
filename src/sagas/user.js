import { all, call, delay, put, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import {
  CHANGE_PASSWORD,
  changePasswordFailure,
  changePasswordRequested,
  changePasswordSuccess,
  FORGOT_PASSWORD,
  forgotPasswordFailure,
  forgotPasswordRequested,
  forgotPasswordSuccess,
  FETCH_MY_PROFILE_DETAIL,
  fetchMyProfileDetailFailure,
  fetchMyProfileDetailRequested,
  fetchMyProfileDetailSuccess,
  LOGIN,
  LOGIN_SUCCESS,
  loginFailure,
  loginRequested,
  loginSuccess,
  GENERATE_OTP,
  generateOtpRequested,
  genearteOtpfailure,
  generateOtpSuccess,
  genearteOtp,
  LOGOUT,
  logoutFailure,
  logoutRequested,
  logoutSuccess,
  UPDATE_PROFILE_DETAIL,
  updateProfileDetailFailure,
  updateProfileDetailRequested,
  updateProfileDetailSuccess
} from '../actions/user-action-types';
import httpClient from './http-client';

export function* loginHandler({ payload }) {
  yield put(generateOtpRequested());

  const request = {
    data: payload,
    method: 'POST',
    url: 'job-apis.php?type=login',
  };

  const {
    data, error,
  } = yield call(httpClient, request, true, false);

  if (error) {
    yield put(loginFailure(error));
    alert('Enter valid email or password');
  } else {
    yield put(loginSuccess(payload.token));
    yield delay(200);
    yield put(push('/dashboard'));
  }
}

export function* otpHandler({ payload }) {
  yield put(loginRequested());

  const request = {
    data: payload,
    method: 'POST',
    url: 'job-apis.php?type=login',
  };

  //console.log('============',request)

  const {
    data, error,
  } = yield call(httpClient, request, true, false);

  if (!(data.status == 200)) {
   // console.log(error)
    yield put(loginFailure(data.message));
  } else {
    console.log('logindata', data)
    yield put(loginSuccess({
      token: data.data[0].token,
      userId: data.data[0].company_id,
      location: data.data[0].location,
      userName: data.data[0].company_name
    }));
    yield delay(200);
    yield put(push('/dashboard'));
  }
}

export function* forgotPasswordHandler({ payload }) {
  yield put(forgotPasswordRequested());

  const request = {
    method: 'get',
    params: payload,
    url: '/job-apis.php?type=forgotPassword',
  };

  const { error, data } = yield call(httpClient, request, true, false);
 ///console.log('-----',error, data)
  if (error) {
    yield put(forgotPasswordFailure(error));
  } else {
    if(data.status == 200) {
      alert('New Password Sent to your Registered Email Address');
      yield put(forgotPasswordSuccess());
      yield put(push('/login'));
    } else {
      alert('This Email Address is not register with Us, Please Register');
      yield put(push('/recruiter-registration'));
    }

  }
}

export function* logoutHandler() {
  yield put(logoutRequested());

  const request = {
    method: 'PUT',
    url: 'logout',
  };

  const { error } = yield call(httpClient, request, true, true);

  if (error) {
    yield put(logoutFailure(error));
  } else {
    yield put(logoutSuccess());
    yield put(push('/'));
  }
}

export function* changePasswordHandler({ payload }) {
  yield put(changePasswordRequested());

  const request = {
    method: 'get',
    params: payload,
    url: '/job-apis.php?type=changePassword',
  };

  const { error } = yield call(httpClient, request, true, true);

  if (error) {
    yield put(changePasswordFailure(error));
  } else {
    yield put(changePasswordSuccess());
  //  yield put(push('/my-profile'));
  }
}

export function* fetchProfileHandler({ payload }) {
  yield put(fetchMyProfileDetailRequested());

  const payloadCustom = {
    sessToken: payload.token
  }

  const request = {
    method: 'get',
    params: payloadCustom,
    url: 'job-apis.php?type=getVendor',
  };

  const {
    data, error,
  } = yield call(httpClient, request, true, true);

  if (!(data.status == 200)) {
    yield put(fetchMyProfileDetailFailure(data.message));
  } else {
    yield put(fetchMyProfileDetailSuccess({
      token: data.data[0].token,
      userId: data.data[0].company_id,
      location: data.data[0].location,
      userName: data.data[0].company_name
    }));
  }
}

export function* updateProfileHandler({ payload }) {
  yield put(updateProfileDetailRequested());
  const body = new FormData();

  body.append('name', payload.name);
  body.append('password', payload.password);
  body.append('phone_number', payload.phone_number);

  if (payload.image) {
    body.append('image', payload.image);
  }

  const request = {
    data: body,
    headers: { 'Content-Type': 'multipart/form-data' },
    method: 'POST',
    url: 'profile-update',
  };

  const { error } = yield call(httpClient, request, true, true);

  if (error) {
    yield put(updateProfileDetailFailure(error));
  } else {
    yield put(updateProfileDetailSuccess());
    yield put(push('/my-profile'));
  }
}

function* user() {
  yield all([
    takeLatest(CHANGE_PASSWORD, changePasswordHandler),
    takeLatest(FORGOT_PASSWORD, forgotPasswordHandler),
    takeLatest(LOGIN, loginHandler),
    takeLatest(GENERATE_OTP, otpHandler),
    takeLatest(LOGOUT, logoutHandler),
    //takeLatest([LOGIN_SUCCESS, FETCH_MY_PROFILE_DETAIL], fetchProfileHandler),
    takeLatest(UPDATE_PROFILE_DETAIL, updateProfileHandler),
  ]);
}

export default user;

import { call, put, select, delay } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { hideLoader, showLoader, showToast } from '../actions/app-action-types';
import { logoutSuccess } from '../actions/user-action-types';
import axiosInstance from '../utility/axios-instance';

function* HttpClient(payload, isLoader = true, auth = true) {
  if (!navigator.onLine) {
    yield put(showToast('Please make sure you\'re connected with internet.'));

    return {
      error: true,
      result: null,
    };
  }

  if (isLoader) {
    yield put(showLoader());
    yield delay(250);
  }

  try {
    const request = { ...payload };

    if (auth) {
    //  console.log(authToken)
      const authToken = yield select((store) => store.user.token);

      request.headers = { Authorization: `Bearer ${authToken}` };
    }

    const {
      data, headers,
    } = yield call(axiosInstance, request);
   /// console.log('=============',data)

    if (isLoader) {
      yield put(hideLoader());
    }

    return {
      data,
      error: null,
      headers,
    };
  } catch (error) {
    if (isLoader) {
      yield put(hideLoader());
    }

    let message = '';

    message = data.message;

    if (message !== 'Network Error') {
      alert(message);
    }

    return {
      error,
      result: null,
    };
  }
}

export default HttpClient;

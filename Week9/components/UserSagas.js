import { call, put, takeEvery, takeLatest, all } from 'redux-saga/effects';
import axios from 'axios';
import { 
  FETCH_USERS_REQUEST, 
  POST_USER_REQUEST,
  UPDATE_USER_REQUEST,
  fetchUsersSuccess, 
  fetchUsersFailure, 
  postUserSuccess, 
  postUserFailure ,
  updateUserSuccess,
  updateUserFailure,
} from './UserActions';

const url = 'https://66faa7eaafc569e13a9caa55.mockapi.io/dulieu';

// Hàm gọi API để fetch dữ liệu người dùng
const fetchUsersApi = () => axios.get(url);

// Hàm gọi API để post dữ liệu người dùng
const postUserApi = (data) => 
  axios.post(url, data);

// Worker Saga: xử lý FETCH_USERS_REQUEST
function* fetchUsersSaga() {
  try {
    const response = yield call(fetchUsersApi);
    yield put(fetchUsersSuccess(response.data));
  } catch (error) {
    yield put(fetchUsersFailure(error.message));
  }
}

// Worker Saga: xử lý POST_USER_REQUEST
function* postUserSaga(action) {
  try {
    const response = yield call(postUserApi, action.payload);
    yield put(postUserSuccess(response.data));
  } catch (error) {
    yield put(postUserFailure(error.message));
  }
}
const updateUserApi = (userData) =>
  axios.put(`https://66faa7eaafc569e13a9caa55.mockapi.io/dulieu/${userData.id}`, userData);

// Worker Saga: handles the update user action
function* updateUserSaga(action) {
  try {
    const response = yield call(updateUserApi, action.payload);
    yield put(updateUserSuccess(response.data)); // Dispatch success action with the response
  } catch (error) {
    yield put(updateUserFailure(error.message)); // Dispatch failure action with the error message
  }
}

// Root Saga: lắng nghe các action type
export default function* rootSaga() {
  yield all([
    takeEvery(FETCH_USERS_REQUEST, fetchUsersSaga),
    takeLatest(POST_USER_REQUEST, postUserSaga),
    takeLatest(UPDATE_USER_REQUEST, updateUserSaga)
  ]);
}

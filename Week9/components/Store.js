import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import userReducer from './UserReducer';
import userSaga from './UserSagas';
import usertoolkit from './Usertoolkit';

// Khởi tạo saga middleware
const sagaMiddleware = createSagaMiddleware();

// Khởi tạo store và cấu hình middleware
const store = configureStore({
  reducer: {
    users: userReducer,
  //users:usertoolkit,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

// Chạy saga
sagaMiddleware.run(userSaga);

export default store;

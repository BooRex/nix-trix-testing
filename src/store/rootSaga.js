import { fork } from 'redux-saga/effects';

export default function* rootSaga() {
  yield fork(userSaga);
  yield fork(taskSaga);
}

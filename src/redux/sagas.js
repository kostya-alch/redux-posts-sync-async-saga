import { takeEvery, put, call } from 'redux-saga/effects';
import {
  hideLoaderActionCreator,
  showAlertActionCreator,
  showLoaderActionCreator,
} from './actions';
import { FETCH_POSTS, REQUEST_POSTS } from './types';

export function* sagaWatcher() {
  yield takeEvery(REQUEST_POSTS, sagaWorker);
}

function* sagaWorker() {
  try {
    yield put(showLoaderActionCreator());
    const payload = yield call(fetchPosts);
    yield put({ type: FETCH_POSTS, payload });
    yield put(hideLoaderActionCreator());
  } catch (error) {
    yield put(showAlertActionCreator('Что-то пошло не так'));
    yield put(hideLoaderActionCreator());
  }
}

async function fetchPosts() {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/posts?_limit=7'
  );
  return await response.json();
}

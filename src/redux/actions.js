import {
  CREATE_POST,
  HIDE_ALERT,
  HIDE_LOADER,
  REQUEST_POSTS,
  SHOW_ALERT,
  SHOW_LOADER,
} from './types';

export function createPostActionCreator(post) {
  return {
    type: CREATE_POST,
    payload: post,
  };
}

export function showLoaderActionCreator() {
  return {
    type: SHOW_LOADER,
  };
}

export function hideLoaderActionCreator() {
  return {
    type: HIDE_LOADER,
  };
}

export function showAlertActionCreator(text) {
  return (dispatch) => {
    dispatch({
      type: SHOW_ALERT,
      payload: text,
    });
    setTimeout(() => {
      dispatch(hideAlertActionCreator());
    }, 3000);
  };
}

export function hideAlertActionCreator() {
  return {
    type: HIDE_ALERT,
  };
}

export function fetchPostsActionCreator() {
  return {
    type: REQUEST_POSTS,
  };
}

import {
  put,
  call,
} from 'redux-saga/effects';

async function setUnfollowAuthorApi(userId, authorId) {
  const res = await fetch('http://34.205.75.176:5000/users/update/unfollow/author', {
    method: 'PUT',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      userId,
      authorId,
    }),
  });
  const data = await res.json();
  return data;
}

export default function* asyncSetUnfollowAuthorApi(action) {
  try {
    yield call(setUnfollowAuthorApi, action.payload.userId, action.payload.authorId);

    yield put({ type: 'SUCCESS_SET_UNFOLLOW_AUTHOR' });
  } catch (err) {
    console.log(err);
    yield put({ type: 'FAILURE_SET_UNFOLLOW_AUTHOR' });
  }
}

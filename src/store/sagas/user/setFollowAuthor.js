import {
  put,
  call,
} from 'redux-saga/effects';

async function setFollowAuthorApi(userId, authorId) {
  const res = await fetch('http://52.70.19.141:5000/users/update/follow/author', {
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

export default function* asyncSetFollowAuthorApi(action) {
  try {
    yield call(setFollowAuthorApi, action.payload.userId, action.payload.authorId);

    yield put({ type: 'SUCCESS_SET_FOLLOW_AUTHOR' });
  } catch (err) {
    console.log(err);
    yield put({ type: 'FAILURE_SET_FOLLOW_AUTHOR' });
  }
}

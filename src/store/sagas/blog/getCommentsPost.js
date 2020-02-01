import {
  put,
  call,
} from 'redux-saga/effects';

async function getCommentsPostApi(comments) {
  const res = await fetch('http://localhost:5000/blog/comments', {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(comments),
  });
  const data = await res.json();
  return data;
}

export default function* asyncGetCommentsPostApi(action) {
  try {
    const response = yield call(getCommentsPostApi, action.payload.comments);

    yield put({ type: 'SUCCESS_GET_ALL_COMMENTS_POST', payload: { data: response } });
  } catch (err) {
    yield put({ type: 'FAILURE_GET_ALL_COMMENTS_POST' });
  }
}

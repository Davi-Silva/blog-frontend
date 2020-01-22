import {
  put,
  call,
} from 'redux-saga/effects';

async function getTutorialsApi() {
  const res = await fetch('http://34.196.97.115:5000/blog/home/tutorials', {
    method: 'GET',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await res.json();
  return data;
}

export default function* asyncTutorialsApi() {
  try {
    const response = yield call(getTutorialsApi);

    yield put({ type: 'SUCCESS_TUTORIALS', payload: { data: response } });
  } catch (err) {
    yield put({ type: 'FAILURE_TUTORIALS' });
  }
}

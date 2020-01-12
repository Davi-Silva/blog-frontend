import {
  takeLatest,
  put,
  call,
  all,
} from 'redux-saga/effects';


async function getPodcastApi(slug) {
  const res = await fetch(`http://localhost:5000/podcasts/get/slug/${slug}`, {
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

function* asyncGetPodcast(action) {
  try {
    const response = yield call(getPodcastApi, action.payload.slug);

    yield put({ type: 'SUCESS_PODCAST_BY_SLUG', payload: { data: response } });
  } catch (err) {
    yield put({ type: 'FAILURE_PODCAST_BY_SLUG' });
  }
}


export default function* root() {
  yield all([
    takeLatest('REQUEST_PODCAST_BY_SLUG', asyncGetPodcast),
  ]);
}

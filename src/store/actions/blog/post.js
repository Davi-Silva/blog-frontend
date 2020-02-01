/* eslint-disable import/prefer-default-export */
export function getPost(slug) {
  return {
    type: 'REQUEST_POST',
    payload: {
      slug,
    },
  };
}

export function updateHowManyRead(post) {
  return {
    type: 'REQUEST_UPDATE_HOW_MANY_READ',
    payload: {
      post,
    },
  };
}

export function getCommentsPost(comments) {
  return {
    type: 'REQUEST_GET_ALL_COMMENTS_POST',
    payload: {
      comments,
    },
  };
}

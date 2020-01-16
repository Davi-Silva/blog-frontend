const initialState = {
  data: [],
  loading: false,
  fetched: false,
  error: false,
};

export default function mainBlogPosts(state = initialState, action) {
  switch (action.type) {
    case 'REQUEST_GET_MAIN_BLOG_POSTS':
      return {
        ...state,
        loading: true,
      };
    case 'SUCCESS_GET_MAIN_BLOG_POSTS':
      return {
        ...state,
        data: action.payload.data,
        loading: false,
        fetched: true,
        error: false,
      };
    case 'FAILURE_GET_MAIN_BLOG_POSTS':
      return {
        ...state,
        data: [],
        loading: false,
        fetched: true,
        error: true,
      };
    default:
      return state;
  }
}

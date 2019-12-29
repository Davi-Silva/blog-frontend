const initialState = {};

export default function user(state = initialState, action) {
  switch (action.type) {
    case 'LOG_USER':
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
}

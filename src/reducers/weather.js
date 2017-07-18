
export default function(state=[], action) {
  switch (action.type) {
    case 'GET_WEATHER':
      return [action.payload.data, ...state];
    case 'STOP_SEARCH':
      return state;
    default:
      return state;
  }
}
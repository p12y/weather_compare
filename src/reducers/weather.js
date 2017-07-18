
export default function(state=[], action) {
  switch (action.type) {
    case 'GET_WEATHER':
      return [...state, action.payload.data];
    default:
      return state;
  }
}
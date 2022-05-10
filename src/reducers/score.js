export default function score(state = 0, action) {
  switch (action.type) {
    case 'ADD_SCORE':
      return state + 1;
    case 'REDUCE_SCORE':
      return state - 1;
    default:
      return state;
  }
}

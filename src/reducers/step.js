export default function step(state = 'choose', action) {
  switch (action.type) {
    case 'CHOOSE_ITEM':
      return action.payload.step;
    case 'WAIT':
      return action.payload;
    case 'RESULT':
      return state;
    case 'PLAY_AGAIN':
      return action.payload.step;
    default:
      return state;
  }
}

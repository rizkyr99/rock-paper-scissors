export default function pick(state = [], action) {
  switch (action.type) {
    case 'PICK':
      return state.concat([action.text]);
    default:
      return state;
  }
}

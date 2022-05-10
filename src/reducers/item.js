export default function item(state = '', action) {
  switch (action.type) {
    case 'CHOOSE_ITEM':
      return action.payload.item;
    default:
      return state;
  }
}

export function addScore() {
  return {
    type: 'ADD_SCORE',
  };
}

export function reduceScore() {
  return {
    type: 'REDUCE_SCORE',
  };
}

export function chooseItem(item) {
  return {
    type: 'CHOOSE_ITEM',
    payload: {
      step: 'wait',
      item,
    },
  };
}

export function waitHouse() {
  return {
    type: 'WAIT_HOUSE',
    payload: {
      step: 'result',
    },
  };
}

export function playAgain() {
  return {
    type: 'PLAY_AGAIN',
    payload: {
      step: 'choose',
    },
  };
}

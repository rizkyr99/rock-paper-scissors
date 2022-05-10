import React from 'react';
import Choose from './Choose';
import Wait from './Wait';
import { chooseItem } from '../actions';

import { connect } from 'react-redux';

const Game = (props) => {
  console.log(props);
  const stepChoose = () => {
    return <Choose chooseItem={props.chooseItem} />;
  };

  const stepWait = () => {
    return <Wait item={props.item} />;
  };

  const showRender = () => {
    if (props.step === 'choose') {
      return stepChoose();
    } else if (props.step === 'wait') {
      return stepWait();
    }
  };

  return <div className='game-container'>{showRender()}</div>;
};

const mapStateToProps = (state) => {
  return {
    step: state.step,
    item: state.item,
  };
};

export default connect(mapStateToProps, { chooseItem })(Game);

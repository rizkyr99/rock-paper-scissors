import React from 'react';
import { connect } from 'react-redux';

const Score = (props) => {
  return (
    <div className='score'>
      <div className='score-title'>SCORE</div>
      <div className='score-count'>{props.score}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    score: state.score,
  };
};

export default connect(mapStateToProps)(Score);

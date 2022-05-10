import React from 'react';
import RockIcon from '../assets/icon-rock.svg';
import PaperIcon from '../assets/icon-paper.svg';
import ScissorsIcon from '../assets/icon-scissors.svg';

const Pick = (props) => {
  return (
    <>
      <div className='game-button paper' onClick={() => props.chooseItem('paper')}>
        <div className='game-button-icon'>
          <img src={PaperIcon} alt='' />
        </div>
      </div>
      <div className='game-button rock' onClick={() => props.chooseItem('rock')}>
        <div className='game-button-icon'>
          <img src={RockIcon} alt='' />
        </div>
      </div>
      <div className='game-button scissors' onClick={() => props.chooseItem('scissors')}>
        <div className='game-button-icon'>
          <img src={ScissorsIcon} alt='' />
        </div>
      </div>
    </>
  );
};

export default Pick;

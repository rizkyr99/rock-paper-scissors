import React, { useEffect, useState } from 'react';
import { addScore, playAgain } from '../actions';

import { connect } from 'react-redux';
import PaperIcon from '../assets/icon-paper.svg';
import RockIcon from '../assets/icon-rock.svg';
import ScissorsIcon from '../assets/icon-scissors.svg';

const Wait = ({ item, addScore, playAgain }) => {
  const [houseItem, sethouseItem] = useState();
  const [result, setResult] = useState();
  const icon = () => {
    switch (item) {
      case 'paper':
        return PaperIcon;
      case 'rock':
        return RockIcon;
      case 'scissors':
        return ScissorsIcon;
      default:
        return null;
    }
  };
  const houseIcon = () => {
    switch (houseItem) {
      case 'paper':
        return PaperIcon;
      case 'rock':
        return RockIcon;
      case 'scissors':
        return ScissorsIcon;
      default:
        return null;
    }
  };

  const housePick = () => {
    const items = ['paper', 'rock', 'scissors'];
    const houseItem = items[Math.floor(Math.random() * items.length)];
    sethouseItem(houseItem);
    if (item === 'paper') {
      if (houseItem === 'rock') {
        return 'win';
      } else if (houseItem === 'scissors') {
        return 'lose';
      } else {
        return 'draw';
      }
    }
    if (item === 'rock') {
      if (houseItem === 'paper') {
        return 'lose';
      } else if (houseItem === 'scissors') {
        return 'win';
      } else {
        return 'draw';
      }
    }
    if (item === 'scissors') {
      if (houseItem === 'rock') {
        return 'lose';
      } else if (houseItem === 'paper') {
        return 'win';
      } else {
        return 'draw';
      }
    }
  };

  const setScore = () => {
    const result = housePick();
    setResult(result);
    console.log(result);
    switch (result) {
      case 'win':
        addScore();
    }
  };

  useEffect(() => {
    setScore();
  }, []);

  return (
    <>
      <div className={`game-button ${item} active`}>
        <div className='game-button-icon'>
          <img src={icon()} alt='' />
        </div>
      </div>

      <div className={`game-button house ${houseItem}`}>
        <div className='game-button-icon'>
          <img src={houseIcon()} alt='' />
        </div>
      </div>

      <div className='result-container'>
        <div className='result'>YOU {result}</div>
        <div className='play-button' onClick={playAgain}>
          Play Again
        </div>
      </div>
    </>
  );
};

export default connect(null, { addScore, playAgain })(Wait);

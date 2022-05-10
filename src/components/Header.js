import React from 'react';
import Score from './Score';

const Header = () => {
  return (
    <div className='header'>
      <div className='title'>
        ROCK <br />
        PAPER <br />
        SCISSORS
      </div>
      <Score />
    </div>
  );
};

export default Header;

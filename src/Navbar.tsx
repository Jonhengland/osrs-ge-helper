// Navbar.tsx

import React from 'react';
import geIcon from './icons/ge-icon.png';
import bossesIcon from './icons/bossesIcon.png';
import highAlchemyIcon from './icons/highAlchemyIcon.png';
import searchIcon from './icons/searchIcon.png';
import skillsIcon from './icons/skillsIcon.png';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
            <span className='nav-item'>
                <div className='image-icon-container'>
                    <img src={searchIcon} alt={"items"} />
                </div>
                <a href="#">All Items</a>
            </span>
        </li>
        <li>
            <span className='nav-item'>
                <div className='image-icon-container'>
                    <img src={highAlchemyIcon} alt={"items"} />
                </div>
                <a href="#">High Alchemy</a>
            </span>
        </li>
        <li>
            <span className='nav-item'>
                <div className='image-icon-container'>
                    <img src={bossesIcon} alt={"items"} />
                </div>
                <a href="#">Boss Setups</a>
            </span>
        </li>
        <li>
            <span className='nav-item'>
                <div className='image-icon-container'>
                    <img src={skillsIcon} alt={"items"} />
                </div>
                <a href="#">Skilling</a>
            </span>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
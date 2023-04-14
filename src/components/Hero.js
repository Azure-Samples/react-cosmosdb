import React from 'react';

const Hero = ({ onSelect, hero, selectedHero, onDelete }) => {
  return (
    <li
      onClick={() => onSelect(hero)}
      className={hero === selectedHero ? 'selected' : ''}
    >
      <button
        className="delete-button"
        onClick={e => onDelete(e, hero)}
      >
        Delete
      </button>
      <div className="hero-element">
        <div className="badge">
          {hero.id}
        </div>
        <div className="name">
          {hero.name}
        </div>
        <div className="saying">
          {hero.saying}
        </div>
      </div>
    </li>
  );
};

export default Hero;

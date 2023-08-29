import React from 'react';

const BotCollectionItem = ({ bot, enlistBot }) => {
  const { id, name, health, damage, armor, bot_class, avatar_url } = bot;

  const handleEnlistClick = () => {
    // Call the enlistBot function passed as a prop
    enlistBot(bot);
  };

  return (
    <div className="bot-card">
      <img src={avatar_url} alt={name} className="bot-avatar" />
      <h2>{name}</h2>
      <p>Health: {health}</p>
      <p>Damage: {damage}</p>
      <p>Armor: {armor}</p>
      <p>Class: {bot_class}</p>
      <button onClick={handleEnlistClick}>Enlist</button>
    </div>
  );
};

export default BotCollectionItem;
          
         
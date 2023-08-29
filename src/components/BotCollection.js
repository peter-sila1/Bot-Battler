import React from "react";
import BotCollectionItem from "../BotCollectionItem";

function BotCollection({ bots, onEnlistBot, dischargeBot, enlisted }) {

  const list = bots.map(bot => (
    <BotCollectionItem key={bot.id} bot={bot} botFunction={onEnlistBot} dischargeBot={dischargeBot} enlisted={enlisted.includes(bot.id) ? true : false} />
  ))

  return (
    <div className="collection-wrapper">
      <h3>Bot Collection</h3>
      <div className="collection-bot">
        {list}
      </div>
    </div>
  );
}

export default BotCollection;
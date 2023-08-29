import React from 'react'
import BotCollectionItem from '../BotCollectionItem'

function BotArmy({ army, removeFromArmy }) {

  const armyList = army.map((bot) => {
    return <BotCollectionItem key={bot.id} bot={bot} botFunction={removeFromArmy}/>
  })

   if (armyList.length === 0) {
    return  <div className='army-wrapper'>
      <h1>⚔️</h1>
    <p>Choose your battalion ...</p>
    </div>
   }

  return (
    <div className='collection-wrapper'>
      <h3>Your Army</h3>
    <div className='army-active'>
      {armyList}
    </div>
    </div>
  )
}

export default BotArmy
import React, { useEffect, useState } from 'react'
import BotArmy from './bot-army/BotArmy'
import BotCollection from './bot-collection/BotCollection'

function BattleBots() {

const [bots, setBots] = useState([])
const [army, setArmy] = useState([])
const [enlisted, setEnlisted] = useState([])

useEffect(() => {
    fetch('http://localhost:8000/bots')
    .then(res => res.json())
    .then(data => setBots(data))

}, [])

function enlistArmy(bot) {
    if (!army.includes(bot)) {
        setArmy([...army, bot])
        setEnlisted([...enlisted, bot.id])
      }
}

function removeFromArmy(bot) {
    setArmy(army.filter((armyBot) => armyBot.id !== bot.id))
    setEnlisted(enlisted.filter((armyBot) => armyBot !== bot.id))
}

function dischargeBot(id) {
    fetch('http://localhost:8000/bots/${id}', {
        method: "DELETE",
    })
    setBots(bots.filter((bot) => bot.id !== id))

}

console.log(enlisted)
  return (
    <div className='battle-bots'>
        <BotArmy army={army} removeFromArmy={removeFromArmy} />
        <BotCollection bots={bots} onEnlistBot={enlistArmy} dischargeBot={dischargeBot} enlisted={enlisted} />
    </div>
  )
  }
export default BattleBots
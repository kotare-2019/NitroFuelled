import React from 'react'

import {addPlayers} from '../api/index.js'

const Players = (props) => {
  return (
    
    <div className="name-form-container">
      <form className="nameForm" action="/">
        <ul>
          <li>
            <label>Player 1</label>
            <input type="text" name="player1" onChange={props.updatePlayers} onBlur={()=> addPlayers(event.target.value)} maxLength="100" />
            <span>What's your name?</span>
          </li>
          <li>
            <label>Player 2</label>
            <input type="text" name="player2" onChange={props.updatePlayers} onBlur={()=> addPlayers(event.target.value)} maxLength="100" />
            <span>What's your name?</span>
          </li>
          <li>
            <label>Player 3</label>
            <input type="text" name="player3" onChange={props.updatePlayers} onBlur={()=> addPlayers(event.target.value)} maxLength="100" />
            <span>What's your name?</span>
          </li>
          <li>
            <label>Player 4</label>
            <input type="text" name="player4"  onChange={props.updatePlayers} onBlur={()=> addPlayers(event.target.value)} maxLength="100" />
            <span>What's your name?</span>
          </li>
          <li>
            <label>Player 5</label>
            <input type="text" name="player5"onChange={props.updatePlayers}  onBlur={()=> addPlayers(event.target.value)} maxLength="100" />
            <span>What's your name?</span>
          </li>
          <li>
            <label>Player 6</label>
            <input type="text" name="player6"onChange={props.updatePlayers} onBlur={()=> addPlayers(event.target.value)} maxLength="100" />
            <span>What's your name?</span>
          </li>
          <li>
            <label>Player 7</label>
            <input type="text" name="player7"onChange={props.updatePlayers} onBlur={()=> addPlayers(event.target.value)} maxLength="100" />
            <span>What's your name?</span>
          </li>
          <li>
            <label>Player 8</label>
            <input type="text" name="player8"onChange={props.updatePlayers} onBlur={()=> addPlayers(event.target.value)} maxLength="100" />
            <span>What's your name?</span>
          </li>
        </ul>
        <br />
        <div className="button-div">
          <button type="submit" value="Race!"onChange={props.updatePlayers} onClick={props.showBracket}>Race!</button>
        </div>
      </form>
    </div>
  )
}

export default Players
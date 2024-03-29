import React from 'react'


const Leaderboard = (props) => {
    return (
        <div className="leaderboard">
            <h1>Leaderboard</h1>
            {props.state.playersArr.map(player => {
                return <p>{player.name} - {player.score}</p>
            })}
        </div>
    )
}

export default Leaderboard
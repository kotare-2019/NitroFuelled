import React from 'react'

const Winner = (props) => {
  return (

    <div className="winner">
      <h1>Latest Winner</h1>
      <h3>{props.state.winner}</h3>
    </div>
  )
}

export default Winner
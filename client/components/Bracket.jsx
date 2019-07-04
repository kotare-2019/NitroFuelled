import React from 'react'
import { thisExpression } from '@babel/types';

const Bracket = (props) => {

  return (
  <div className="center-all">
    <br/>
    <br/>
    <section id="bracket">
    <div className="container">
    <div className="split split-one">
        <div className="round round-one current">
            <div className="round-details">Round 1<br/><span className="date">Welcome!</span></div>
            <ul className="matchup">
                <li className="team team-top" onClick={props.round1Winner1}>{props.state.player1}</li>
                <li className="team team-bottom" onClick={props.round1Winner1}>{props.state.player2}</li>
            </ul>
            <ul className="matchup">
                <li className="team team-top" onClick={props.round1Winner2}>{props.state.player3}</li>
                <li className="team team-bottom" onClick={props.round1Winner2}>{props.state.player4}</li>
            </ul>
            <ul className="matchup">
                <li className="team team-top" onClick={props.round1Winner3}>{props.state.player5}</li>
                <li className="team team-bottom" onClick={props.round1Winner3}>{props.state.player6}</li>
            </ul>
            <ul className="matchup">
                <li className="team team-top" onClick={props.round1Winner4}>{props.state.player7}</li>
                <li className="team team-bottom" onClick={props.round1Winner4}>{props.state.player8}</li>
            </ul>                                    
        </div>

        <div className="round round-two current">
            <div className="round-details">Semi-Finals<br/><span className="date">Don't choke</span></div>         
            <ul className="matchup">
                <li className="team team-top" onClick={props.round2Winner1}>{props.state.semiFinalist1}</li>
                <li className="team team-bottom" onClick={props.round2Winner1}>{props.state.semiFinalist2}</li>
            </ul>   
            <ul className="matchup">
                <li className="team team-top" onClick={props.round2Winner2}>{props.state.semiFinalist3}</li>
                <li className="team team-bottom" onClick={props.round2Winner2}>{props.state.semiFinalist4}</li>
            </ul>                                     
        </div>
        
        <div className="round round-three current">
            <div className="round-details">Finals<br/><span className="date">Congrats!</span></div>         
            <ul className="matchup">
                <li className="team team-top" onClick={props.mktWinner}>{props.state.finalist1}</li>
                <li className="team team-bottom" onClick={props.mktWinner}>{props.state.finalist2}</li>
            </ul>                                       
        </div>    
    </div>
  </div>
  </section>
  <div>
      Congrats to {props.state.winner}!!
  </div>
  </div>
  
  )
}


export default Bracket
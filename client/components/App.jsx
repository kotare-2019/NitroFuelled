import React from 'react'
// import { HashRouter as Router, Route} from react-router-dom
// import Bracket from './Bracket'
import Players from './Players'
import Bracket from './Bracket'
import Winner from './Winner'
import Leaderboard from './Leaderboard'
import { getPlayers } from '../api/index'

// const App = () => {
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      playersArr: [],
      checkPlayers: [],
      bracketComponent: false,
      player1: "",
      player2: "",
      player3: "",
      player4: "",
      player5: "",
      player6: "",
      player7: "",
      player8: "",
      semiFinalist1: [],
      semiFinalist2: [],
      semiFinalist3: [],
      semiFinalist4: [],
      finalist1: [],
      finalist2: [],
      winner: [],
      winnerComponent: false,
    }

    this.handleChange = this.handleChange.bind(this)
    this.showBracket = this.showBracket.bind(this)
    this.round1Winner1 = this.round1Winner1.bind(this)
    this.round1Winner2 = this.round1Winner2.bind(this)
    this.round1Winner3 = this.round1Winner3.bind(this)
    this.round1Winner4 = this.round1Winner4.bind(this)
    this.round2Winner1 = this.round2Winner1.bind(this)
    this.round2Winner2 = this.round2Winner2.bind(this)
    this.mktWinner = this.mktWinner.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.addExisitingPlayers = this.addExisitingPlayers.bind(this)
  }

  componentDidMount() {
    this.addExisitingPlayers()
  }

  addExisitingPlayers() {
    getPlayers()
      .then(players => {
        this.setState({
          playersArr: players,
        })
      })
      .then(console.log('hfghfgh'))
  }

  showBracket() {
    this.setState({ bracketComponent: true })
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,

    })
  }

  round1Winner1(event) {
    console.log(event.target.textContent)
    this.setState({
      semiFinalist1: event.target.textContent
    })
  }

  round1Winner2(event) {
    console.log(event.target.textContent)
    this.setState({
      semiFinalist2: event.target.textContent
    })
  }

  round1Winner3(event) {
    console.log(event.target.textContent)
    this.setState({
      semiFinalist3: event.target.textContent
    })
  }

  round1Winner4(event) {
    console.log(event.target.textContent)
    this.setState({
      semiFinalist4: event.target.textContent
    })
  }

  round2Winner1(event) {
    this.setState({
      finalist1: event.target.textContent
    })
  }

  round2Winner2(event) {
    this.setState({
      finalist2: event.target.textContent
    })
  }

  mktWinner(event) {
    this.setState({
      winner: event.target.textContent,
    })
  }

  render() {
    console.log(this.state.playersArr)
    return (
      // {this.state.bracketComponent == true && <Bracket/>}
      <div>
        <div className="hero-image">
          <div className="center-logo">
            <img src="/images/CTReda.png" />
            {/* <h3>Bridey's</h3> */}
            {/* <h1>Mario Kart Tournament</h1> */}
          </div>
        </div>
        <div className="container">
          <Leaderboard state={this.state} />
          {this.state.bracketComponent ? <Bracket state={this.state} round1Winner1={this.round1Winner1} round1Winner2={this.round1Winner2} round1Winner3={this.round1Winner3} round1Winner4={this.round1Winner4} round2Winner1={this.round2Winner1} round2Winner2={this.round2Winner2} mktWinner={this.mktWinner} /> : <Players updatePlayers={this.handleChange} showBracket={this.showBracket} />}
          <Winner state={this.state} />
        </div>
      </div>

      // button on click (showbracket)
    )
  }
}

export default App

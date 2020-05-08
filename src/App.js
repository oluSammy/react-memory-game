import React, {Component} from 'react';
import './App.css';

import Header from './components/header/header.components';
import GameRule from './components/game-rules/game-rules.components';
import CardContainer from './components/card-container/card-container.components';
import players from './data/data';

class App extends Component{

  state={
    currentScore: 0,
    highScores: [],
    playersClicked: [],
    players: players
  }

  handleClick = (e)=>{
    const clickedPlayer = e.currentTarget.dataset.id;

    const {currentScore, highScores, playersClicked, players} = this.state;
    this.setState({players: shuffleArray(players)})

    if(this.state.playersClicked.includes(clickedPlayer)) 
    {
      //if player was previously clicked, 
      /**
       * place current score into high scores array
       * set current score to 0
       * empty players clicked array 
       */
      this.setState({
        highScores: [currentScore, ...highScores], 
        currentScore: 0, 
        playersClicked: []
      });

      
    }else
    {
      this.setState({currentScore: currentScore + 1, playersClicked: [clickedPlayer, ...playersClicked]});
    }
  };

  render(){
    return(
      <div className="app">
        <Header score={this.state.currentScore} highScores= {this.state.highScores}/>
        <GameRule/>      
        <CardContainer handleClick = {this.handleClick} players={this.state.players}/>  
      </div>
    )
  }
}

const shuffleArray = (array) => {
  var m = array.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}

export default App;

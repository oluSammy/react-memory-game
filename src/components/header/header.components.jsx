import React from 'react';

import './header.styles.css';


//Header component
const Header = (props) =>{
    const {score, highScores} = props
    return(
        <div className="header">
            <h1 className="game-title">Memory Game</h1>
            <div className="scores">
                <p className="current-score">Score: {score}</p>
                <p className="top-score">Top Score: {topScore(highScores)}</p>
            </div>
        </div>
    )
};

//function to determine top score
const topScore = (arr)=>{
    if(arr.length){
        return Math.max(...arr);
    }else{
        return 0;
    }
}

export default Header;
import React from 'react';


import './card-container.styles.css';

import Card from '../card/card.components';


const CardContainer = (props) =>{
    return(
        <div className="container">
            {props.players.map(player => <Card player = {player} key={player.name} handleClick = {props.handleClick}/>)}
        </div>
    )
};

export default CardContainer;
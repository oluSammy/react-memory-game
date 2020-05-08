import React from 'react';

import './card.styles.css';

const Card = (props) =>{
    const {name, club, country} = props.player;
    const handleClick = props.handleClick;

    return(
        <div className="card" data-id={name} onClick={handleClick}>
            <div className="card-img">
                <img src={require(`../../img/${name}.jpg`)} alt="name" className="img"/>
            </div>
            <div className="card-details">
                <p className="player-name">{name}</p>
                <div className="player">
                    <div className="player-country">
                        <span className="bold">Country: </span>
                        {country}
                    </div>
                    <div className="player-club">
                        <span className="bold">Club: </span>
                        {club}
                    </div>
                </div>
            </div>
        </div>               
    )
};

export default Card;
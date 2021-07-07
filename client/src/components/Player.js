import React from 'react';

const Player = (props) => {

    return(
        <div className='player'>
        <h3>{props.player.name}</h3>
        <h4>{props.player.country}</h4>
        <h5>Number of Searches {props.player.searches}</h5>
    </div>
    )
};

export default Player;
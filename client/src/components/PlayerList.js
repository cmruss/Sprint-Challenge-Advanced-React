import React from 'react';
import Player from './Player'

const PlayerList = (props) => {

    return (
        <div className='player-list-container'>
            <h1>Players</h1>
            <div className='player-list'>
                {props.players.map(player =>(
                   <Player player={player} key={player.id}/>
                ))}
            </div>
        </div>
    )
}

export default PlayerList;
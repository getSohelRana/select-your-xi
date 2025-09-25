import React from 'react';
import SelectedCardsPlayer from '../SelectedCards/SelectedCardsPlayer';
const SelectedPlayers = ({purchesPlayer}) => {
    // console.log(purchesPlayer)
    return (
        // <SelectedCardsPlayer></SelectedCardsPlayer>
        <div>
            {
                purchesPlayer.map((player , idx) => <SelectedCardsPlayer key={idx} player={player}></SelectedCardsPlayer>)
            }
        </div>
       
    );
};

export default SelectedPlayers;
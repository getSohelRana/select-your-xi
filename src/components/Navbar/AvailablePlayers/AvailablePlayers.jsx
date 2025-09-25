import React ,{use} from 'react';
import PlayersCard from '../PlayersCard/PlayersCard';
const AvailablePlayers = ({palyerPromise , setAvailableBalance , availableBalance, purchesPlayer , setPurchesPlayer}) => {
    const playerdata = use(palyerPromise)
    // console.log(playerdata)
    return (
        <div className='grid md:grid-cols-3 gap-4'>
            {
                playerdata.map((player , idx) => <PlayersCard availableBalance ={availableBalance} setAvailableBalance = {setAvailableBalance} key = {idx} player={player} purchesPlayer ={purchesPlayer} setPurchesPlayer={setPurchesPlayer}></PlayersCard>)
            }

        </div>
    );
};

export default AvailablePlayers;


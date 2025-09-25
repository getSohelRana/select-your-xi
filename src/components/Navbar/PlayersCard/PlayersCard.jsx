import React, { useState } from "react"
import userImg from "../../../assets/user.png"
import flagImg from "../../../assets/flag.png"

const  PlayersCard = ({player , idx, setAvailableBalance, availableBalance, purchesPlayer, setPurchesPlayer}) => {
    const [isSelected , setIsSelected] = useState(false)
    const handleSelected = (playerData) => {
        if(availableBalance < playerData['price']){
            alert('Not enough Coins');
            return
        }
        setIsSelected(true);
        setAvailableBalance(availableBalance - playerData['price']);
        setPurchesPlayer([...purchesPlayer,playerData])
    }
    return (
        <div key = {idx} className="card  shadow-sm p-3">
                <figure>
                    <img className='rounded-xl h-[300px] md:h-[200px] w-full object-cover'
                    src={player['player-image']}
                    alt="Shoes" />
                </figure>
                <div className="card-body px-0">
                    <div className='flex items-center gap-2'>
                        <img className='w-[25px] object-cover' src={userImg} />
                        <span className="card-title">{player['player-name']}</span>
                    </div>
                    <div className="card-actions items-center justify-between border-b-2 pb-2 border-gray-200">
                        <div className="flex justify-center items-center gap-2">
                            <img className='h-[25px] object-cover' src={flagImg} alt="" />
                            <span className='text-2xl'>{player['Player-country']}</span>
                        </div>
                        <div className="btn bg-gray-100 shadow-none border-0 text-black">All Rounder : {player["allRounder"] ? 'Yes' : 'No'} </div>
                    </div>
                    <div className='flex justify-between text-xl font-semibold text-gray-600'>
                        <span>Rating</span>
                        <span>{player['player-rating']}</span>
                    </div>
                    <div className="card-actions items-center justify-between">
                        <div>
                            <span className='text-xl font-medium'>{player['Left-handed Bat']}</span>
                        </div>
                        <div className="text-gray-600 text-xl">{player['Left-arm orthodox']}</div>
                    </div>

                    <div className="card-actions items-center justify-between">
                        <div className="">
                            <p className='text-xl font-medium'>Price:$ <span>{player['price']}</span></p>
                        </div>
                        <div>
                            <button disabled={isSelected} onClick={() => {handleSelected(player)}} className="btn text-gray-600 text-[18px] shadow-none bg-white border-gray-200"> {isSelected === true ?  "Selected": "Chose Player"  }</button>
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default PlayersCard
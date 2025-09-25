import React from "react";
function SelectedCardsPlayer ({player}) {
    console.log(player)
    return(
         <div className='flex justify-between items-center border-gray-200 border-1 py-4 px-2 my-3 rounded-2xl shadow'>
            <div className='flex items-center gap-3'>
                <img className='w-[80px] h-[80px] object-cover rounded-lg' src={player["player-image"]} alt="" />
                <div>
                    <h2 className='text-2xl font-medium'>{player["player-name"]}</h2>
                    <p>{player["bating-style"]}</p>
                </div>
            </div>
            <div>
                <img className="cursor-pointer" src="https://i.ibb.co.com/YFZWK8GZ/Vector.png" alt="" />
            </div>
        </div>
    )
}

export default SelectedCardsPlayer
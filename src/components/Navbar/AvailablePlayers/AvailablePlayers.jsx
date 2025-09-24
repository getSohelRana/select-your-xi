import React ,{use} from 'react';
import userImg from "../../../assets/user.png"
import flagImg from "../../../assets/flag.png"
const AvailablePlayers = ({palyerPromise}) => {
    const playerdata = use(palyerPromise)
    console.log(playerdata)
    return (
        <div className='grid md:grid-cols-3 gap-4'>
            {
                playerdata.map((player , idx) => <div key = {idx} className="card  shadow-sm p-3">
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
                            <button className="btn text-gray-600 text-[18px] shadow-none bg-white border-gray-200"> Chose Player</button>
                        </div>
                    </div>
                </div>
            </div>)
            }

            {/* <div className="card  w-96 shadow-sm p-3">
                <figure>
                    <img className='rounded-xl'
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes" />
                </figure>
                <div className="card-body px-0">
                    <div className='flex items-center gap-2'>
                        <img className='w-[25px] object-cover' src={userImg} />
                        <span className="card-title">Shakib Al Hasan</span>
                    </div>
                    <div className="card-actions items-center justify-between border-b-2 pb-2 border-gray-200">
                        <div className="flex justify-center items-center gap-2">
                            <img className='h-[25px] object-cover' src={flagImg} alt="" />
                            <span className='text-2xl'>india</span>
                        </div>
                        <div className="btn bg-gray-100 shadow-none border-0 text-black">All Rounder</div>
                    </div>
                    <div className='flex justify-between text-xl font-semibold text-gray-600'>
                        <span>Rating</span>
                        <span>01</span>
                    </div>
                    <div className="card-actions items-center justify-between">
                        <div>
                            <span className='text-xl font-medium'>Left-Hand-Bat</span>
                        </div>
                        <div className="text-gray-600 text-xl">Left-Hand-Boll</div>
                    </div>

                    <div className="card-actions items-center justify-between">
                        <div className="">
                            <p className='text-xl font-medium'>Price:$ <span>150000</span></p>
                        </div>
                        <div>
                            <button className="btn text-gray-600 text-[18px] shadow-none bg-white border-gray-200"> Chose Player</button>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default AvailablePlayers;

/* Player-country
: 
"Bangladesh"
all-rounder
: 
true
bating-style
: 
"Left-handed Bat"
bowling-style
: 
"Left-arm orthodox"
player-image
: 
"https://i.ibb.co.com/Cjfb8xx/Shakib-Al-Hasan.jpg"
player-name
: 
"Shakib Al Hasan"
player-rating
: 
95
price
: 
750000 */
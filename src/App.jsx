
import './App.css'
import Navbar from './components/Navbar/Navbar'
import AvailablePlayers from './components/Navbar/AvailablePlayers/AvailablePlayers'
import SelectedPlayers from './components/Navbar/SelectedPlayers/SelectedPlayers'
import { Suspense, useState } from 'react'

const fetchPlayer = async () => {
  const res = await fetch('./player.json')
  return res.json()
}

const palyerPromise = fetchPlayer()

function App() {
  const [toggle, setToggle] = useState(true)
  const [availableBalance , setAvailableBalance] = useState(6000000)
  const [purchesPlayer, setPurchesPlayer] = useState([])
  // console.log(purchesPlayer)
  return (
    <>
      <Navbar availableBalance = {availableBalance}></Navbar>
      <div className='flex items-center justify-between py-4'>
        <h1 className='text-[28px] font-bold'>Available Players</h1>
        <div className="join  ">
        <button onClick={() => setToggle(true)} className={`btn ${toggle === true ? 'bg-[#E7FE29]' : "bg-white"} border-gray-300 border-r-0 shadow-sm text-black rounded-l-lg`}>Available</button>
        <button onClick={() => setToggle(false)} className={`btn join-item ${toggle === false ? 'bg-[#E7FE29]' : "bg-white"} border-gray-300 shadow-sm text-black rounded-r-lg border-l-0`}>Selected <span>0</span></button>
      </div>
      </div>
      {
        toggle === true ? <Suspense fallback = {  <div className="flex justify-center items-center h-screen w-screen fixed top-0 left-0 bg-blue bg-opacity-10 z-50">
            <span className="loading loading-spinner text-warning"></span>
          </div>}>
        <AvailablePlayers availableBalance ={availableBalance} setAvailableBalance = {setAvailableBalance} palyerPromise = {palyerPromise} purchesPlayer = {purchesPlayer} setPurchesPlayer = {setPurchesPlayer}></AvailablePlayers>
      </Suspense> :  <SelectedPlayers purchesPlayer = {purchesPlayer}></SelectedPlayers>
      }
     
      
    </>
  )
}

export default App

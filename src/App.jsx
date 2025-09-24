
import './App.css'
import Navbar from './components/Navbar/Navbar'
import AvailablePlayers from './components/Navbar/AvailablePlayers/AvailablePlayers'
import SelectedPlayers from './components/Navbar/SelectedPlayers/SelectedPlayers'
import { Suspense } from 'react'

const fetchPlayer = async () => {
  const res = await fetch('./player.json')
  return res.json()
}

function App() {
  
  const palyerPromise = fetchPlayer()
  return (
    <>
      <Navbar></Navbar>
      <Suspense fallback = {<span className="loading loading-spinner loading-xl "></span>}>
        <AvailablePlayers palyerPromise = {palyerPromise}></AvailablePlayers>
      </Suspense>
      {/* <SelectedPlayers></SelectedPlayers> */}
    </>
  )
}

export default App

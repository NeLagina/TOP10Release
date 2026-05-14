import { useState } from 'react'
import Navbar from './Navbar'
import gtabanner from './assets/gta6.webp'
import subnauticabanner from './assets/subnauticabanner.jpg'
import BladesofFire from './assets/BladesofFire.png'
import ROGUETRIP from './assets/ROGUETRIP.png'
import Mineralminingsimulator from './assets/Mineralminingsimulator.jpg'
import Whirlight from './assets/Whirlight.jpg'
import DeadhausSonata from './assets/DeadhausSonata.jpg'
import FoodProcessingSimulator from './assets/FoodProcessingSimulator.jpg'
import MysteriesofOldTokyo from './assets/MysteriesofOldTokyo.jpg'
import Tindark from './assets/Tindark.jpg'
function App() {
  const [count, setCount] = useState(0)



  function Card({ title, banner, RealeaseDate, description }) {

    return <>
      <div className='bg rounded-[2vh]  mx-[3vw] drop-shadow-2xl hover:drop-shadow-indigo-500  hover:cursor-pointer'>
        <div className='bg-black rounded-[2vh]'>
          <img src={banner} className='rounded-[2vh]   opacity-80' alt={` ${title} Banner `} width="100%" height="60%" />
        </div>
        <div className='relative top-[-8vh] pb-[2vh] h-fit w-full bg-cyan-800 rounded-b-[2vh] '>
              <h2 className='rounded-[1vh] ml-[2vw] text-[5vh] '>{title}</h2>
              <h2 className='ml-[2vw] text-[3vh]'>Realease : {RealeaseDate}</h2>
        </div>
      </div>
    </>
  }


  return (
    < div className='bg-purple-800/30'>

      <Navbar />
      <div className='bg-blue-600/80'>
        <h1 className='text-center text-[8vh] pt-[2vh] text-shadow-amber-700'>Upcoming games</h1>
      </div>
      <div className="container w-fit mx-auto mt-3.5">
        <Card banner={gtabanner} title="GTA IV" RealeaseDate="2026" description="decs" />
        <Card banner={subnauticabanner} title="Subnautica 2" RealeaseDate="2026-05-14"  />
        <Card banner={BladesofFire} title="Blades of Fire" RealeaseDate="2026-05-14"  />
        <Card banner={ROGUETRIP} title="ROGUETRIP" RealeaseDate="2026-05-20" />
        <Card banner={Mineralminingsimulator} title="Mineral Mining Simulator" RealeaseDate="2026-05-14" />
        <Card banner={Whirlight} title="Whirlight - No Time To Trip" RealeaseDate="2026-05-14" />
        <Card banner={DeadhausSonata} title="Deadhaus Sonata" RealeaseDate="2026-05-14" />
        <Card banner={FoodProcessingSimulator} title="Food Processing Simulator" RealeaseDate="2026-05-14" />
        <Card banner={MysteriesofOldTokyo} title="Mysteries of Old Tokyo" RealeaseDate="2026-05-14" />
        <Card banner={Tindark} title="異変マチアプ - Tindark" RealeaseDate="2026-05-14"  />
        
      </div>
    </div>
  )
}

export default App

import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
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

function GamePage() {
  const [count, setCount] = useState(0);
  const { id } = useParams();
  const [banner, setBanner] = useState("https://placehold.co/500x750/0f1625/f3f4f6?text=No+Poster");
  const [title, setTitle] = useState("undefined errror")
  useEffect(() => {
    if (id == "DeadhausSonata") {
      setBanner(DeadhausSonata);
      setTitle("Deadhaus Sonata")
    } else if (id == "subnautica2") {
      setBanner(subnauticabanner);
    }
  }, [{}]);


  return (
    <>
      <Navbar />
      <div className='w-[90vh] h-fit mx-auto mt-[5vh] px-[2vw] py-[2vh] bg-blue-700/80'>
        <img src={banner} alt={'banner of ${title}'} />
        <h1>{title}</h1>

      </div>


    </>
  )
}

export default GamePage

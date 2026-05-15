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
let gamelist = {
  DeadhausSonata : {
    title:"Deadhaus Sonata",
    banner: DeadhausSonata,
    description: "Deadhaus Sonata is a third-person narrative-driven action RPG where you play as the undead battling the living, growing in power, and exploring an ocean of content. Step into Malorum, a dark and crumbling world where the lines between life and death no longer hold.",
    release: "2026",
    showcase: ["https://cdn1.epicgames.com/spt-assets/9eb356233dd54cb7b662b98721a8dcc2/deadhaus-sonata-video-1nqci.jpg?resize=1&w=480&h=270&quality=medium",
      "https://cdn1.epicgames.com/spt-assets/9eb356233dd54cb7b662b98721a8dcc2/deadhaus-sonata-video-149on.png?resize=1&w=480&h=270&quality=medium",
      "https://cdn1.epicgames.com/spt-assets/9eb356233dd54cb7b662b98721a8dcc2/deadhaus-sonata-1ry6f.png?resize=1&w=480&h=270&quality=medium",
      "https://cdn1.epicgames.com/spt-assets/9eb356233dd54cb7b662b98721a8dcc2/deadhaus-sonata-1t4an.png?resize=1&w=480&h=270&quality=medium",
      "https://cdn1.epicgames.com/spt-assets/9eb356233dd54cb7b662b98721a8dcc2/deadhaus-sonata-1o92e.png?resize=1&w=480&h=270&quality=medium",
      ,"https://cdn1.epicgames.com/spt-assets/9eb356233dd54cb7b662b98721a8dcc2/deadhaus-sonata-1ao2t.png?resize=1&w=480&h=270&quality=medium",
      "https://cdn1.epicgames.com/spt-assets/9eb356233dd54cb7b662b98721a8dcc2/deadhaus-sonata-c0h6i.png?resize=1&w=480&h=270&quality=medium"

    ]
  },
   Subnautica2 : {
    title:"Subnautica 2",
    banner: subnauticabanner,
    description: "Immerse yourself in a new adventure with Subnautica 2, an open-water survival game from the creators of Subnautica. Play alone or with friends, exploring alluring biomes & discovering fascinating creatures. Craft vehicles, tools, & bases to survive this mysterious alien world.",
    release: "2026-05-14",
    showcase: ["https://cdn1.epicgames.com/spt-assets/011270e3237f4bf69a3459942f005393/subnautica-2-video-15wwi.png?resize=1&w=480&h=270&quality=medium",
      "https://cdn1.epicgames.com/spt-assets/011270e3237f4bf69a3459942f005393/subnautica-2-video-1k7nt.jpg?resize=1&w=480&h=270&quality=medium",
      "https://cdn1.epicgames.com/spt-assets/011270e3237f4bf69a3459942f005393/subnautica-2-1p8u2.jpg?resize=1&w=480&h=270&quality=medium",
      "https://cdn1.epicgames.com/spt-assets/011270e3237f4bf69a3459942f005393/subnautica-2-5eh8a.jpg?resize=1&w=480&h=270&quality=medium",
      "https://cdn1.epicgames.com/spt-assets/011270e3237f4bf69a3459942f005393/subnautica-2-hrgcg.jpg?resize=1&w=480&h=270&quality=medium", 
      "https://cdn1.epicgames.com/spt-assets/011270e3237f4bf69a3459942f005393/subnautica-2-1qieu.jpg?resize=1&w=480&h=270&quality=medium",
      "https://cdn1.epicgames.com/spt-assets/011270e3237f4bf69a3459942f005393/subnautica-2-1q46h.jpg?resize=1&w=480&h=270&quality=medium",
      "https://cdn1.epicgames.com/spt-assets/011270e3237f4bf69a3459942f005393/subnautica-2-3z5yy.jpg?resize=1&w=480&h=270&quality=medium",
      "https://cdn1.epicgames.com/spt-assets/011270e3237f4bf69a3459942f005393/subnautica-2-ljgyt.jpg?resize=1&w=480&h=270&quality=medium"


    ]
  }, GTA_VI : {
    title:"GTA VI",
    banner: gtabanner,
    description: "Grand Theft Auto VI is an upcoming action-adventure game developed and published by Rockstar Games. It is due to be the eighth main Grand Theft Auto game, following Grand Theft Auto V, and the sixteenth entry overal",
    release: "2026 or later",
    showcase: [ "https://www.rockstargames.com/VI/_next/image?url=%2FVI%2F_next%2Fstatic%2Fmedia%2Fdesktop.61b9b4f4.jpg&w=1280&q=75",
      "https://www.rockstargames.com/VI/_next/image?url=%2FVI%2F_next%2Fstatic%2Fmedia%2FHero_BG.6e6cceec.jpg&w=1280&q=100",
      "https://www.rockstargames.com/VI/_next/image?url=%2FVI%2F_next%2Fstatic%2Fmedia%2FHero_FG.4cc88ac8.png&w=1280&q=100",
      "https://www.rockstargames.com/VI/_next/image?url=%2FVI%2F_next%2Fstatic%2Fmedia%2FHero_BG.fca40dd4.jpg&w=1280&q=100",
      "https://www.rockstargames.com/VI/_next/image?url=%2FVI%2F_next%2Fstatic%2Fmedia%2FHero_BG.e8546426.jpg&w=1280&q=100",
      "https://www.rockstargames.com/VI/_next/image?url=%2FVI%2F_next%2Fstatic%2Fmedia%2FHero_FG.46b05590.png&w=1280&q=100",
      "https://www.rockstargames.com/VI/_next/image?url=%2FVI%2F_next%2Fstatic%2Fmedia%2FHero_FG.3b6c0e26.png&w=1280&q=100"

    ]
  }, BladesofFire : {
    title:"BladesofFire",
    banner: BladesofFire,
    description: "A dark fantasy adventure where forging steel shapes combat, progression, and fate. ",
    release: "2026-05-14",
    showcase: [
      "https://cdn1.epicgames.com/spt-assets/23fd5b0e33b6497dbc04b142a8605ec8/blades-of-fire-video-1leaq.jpg?resize=1&w=480&h=270&quality=medium",
      "https://cdn1.epicgames.com/spt-assets/23fd5b0e33b6497dbc04b142a8605ec8/blades-of-fire-video-12atu.jpg?resize=1&w=480&h=270&quality=medium",
      "https://cdn1.epicgames.com/spt-assets/23fd5b0e33b6497dbc04b142a8605ec8/blades-of-fire-video-1gavs.jpg?resize=1&w=480&h=270&quality=medium",
      "https://cdn1.epicgames.com/spt-assets/23fd5b0e33b6497dbc04b142a8605ec8/blades-of-fire-video-ktgq1.jpg?resize=1&w=480&h=270&quality=medium",
      "https://cdn1.epicgames.com/spt-assets/23fd5b0e33b6497dbc04b142a8605ec8/blades-of-fire-video-30x05.jpg?resize=1&w=480&h=270&quality=medium",
      "https://cdn1.epicgames.com/spt-assets/23fd5b0e33b6497dbc04b142a8605ec8/blades-of-fire-video-mu9ub.jpg?resize=1&w=480&h=270&quality=medium"

    ]
  }, ROGUETRIP : {
    title:"ROGUETRIP",
    banner: ROGUETRIP,
    description: "2d driving somewhere",
    release: "2026-05-21",
    showcase: [

    ]
  }, Mineralminingsimulator : {
    title:"Mineral Mining Simulator",
    banner: Mineralminingsimulator,
    description: "mine stuff :/",
    release: "2026-05-14",
    showcase: [
        "https://www.google.com/imgres?q=Mineral%20Mining%20Simulator%20epic%20games&imgurl=https%3A%2F%2Fimages.igdb.com%2Figdb%2Fimage%2Fupload%2Ft_720p%2Fsc12dnw.jpg&imgrefurl=https%3A%2F%2Fwww.igdb.com%2Fgames%2Fmineral-mining-simulator&docid=AaksywRRShViJM&tbnid=4KINA4rY-gqccM&vet=12ahUKEwiZ5sGl2LqUAxUL8bsIHX3bESkQnPAOegQINBAB..i&w=1280&h=720&hcb=2&ved=2ahUKEwiZ5sGl2LqUAxUL8bsIHX3bESkQnPAOegQINBAB"
    ]
  }, Whirlight : {
    title:"Whirlight - No Time To Trip",
    banner: Whirlight,
    description: "Hector is weird. His brilliance is matched only by his misfortune, and so his every creation turns out to be a failure. But just when his creative streak seems to have run out, his most amazing idea ever knocks on his door. To finish his new invention, Hector will have to explore the suggestive Verice Bay. However, right on the verge of achieving his goal, more trouble arises: what was supposed to be the solution to all his problems turns out to be a leap into the unknown. Fortunately this leads him to meeting Margaret, a strong and determined artist and a perfect travelling companion. Together they will embark on a series of adventures through space and time, amidst bizarre characters and unlikely situations, until they foil an imminent threat that looms over the entire world.",
    release: "2026",
    showcase: [
 "https://img.itch.zone/aW1nLzE4MTk4MDg2LnBuZw==/original/Mj5wEG.png"
    ]
  }, FoodProcessingSimulator : {
    title:"Food Processing Simulator",
    banner: FoodProcessingSimulator,
    description: "Procces food :/",
    release: "2026-05-14",
    showcase: [
     FoodProcessingSimulator
      ]
  },MysteriesofOldTokyo : {
    title:"Mysteries of Old Tokyo",
    banner: MysteriesofOldTokyo,
    description: "Browse through articles and photos to establish historical facts and contradict confused spirits.",
    release: "2026-05-14",
    showcase: [
      "https://static.prod.thinkygames.com/uploads/screenshots/dc37d3b3-155f-4225-a126-6faaf4f1a6f8/146fe6ff-9f71-4a74-91db-b96dcdf459c7-640x360.jpg",
      "https://static.prod.thinkygames.com/uploads/screenshots/3d9a3f94-0195-4862-ac5e-8c2a43dea6c1/8c4eaab8-e2e1-46bd-a315-344add8b31d1-640x360.jpg",
      "https://static.prod.thinkygames.com/uploads/screenshots/c3cadd71-8052-4ba1-b9e3-fc9792fee310/80357aa9-b310-490b-b69a-aecf8265b61e-640x360.jpg",
      "https://static.prod.thinkygames.com/uploads/screenshots/c3cadd71-8052-4ba1-b9e3-fc9792fee310/80357aa9-b310-490b-b69a-aecf8265b61e-640x360.jpg",
      "https://static.prod.thinkygames.com/uploads/screenshots/0cf66194-0122-404e-beb4-71dd74b43dbf/66a6bea1-e4c2-431e-8220-10fe4db1b8de-640x360.jpg",

    ]
  },Tindark : {
    title:"異変マチアプ - Tindark",
    banner: Tindark,
    description: "This is a loop horror based on the matching app service for love and marriage. It is a so-called 8th exit-like game system centered on finding abnormalities",
    release: "2026-05-14",
    showcase: [
        "https://i.ytimg.com/vi/32ZChQcF2KY/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGEIgYihlMA8=&rs=AOn4CLCpaGcWXZIR5Fpnz3RcO3wcZKvxTQ",
        "https://cimg.kgl-systems.io/camion/files/famitsu/74779/a6bd8407bf6d5ceee8602e3fad4c3511f.jpg?x=767",
        "https://cimg.kgl-systems.io/camion/files/famitsu/74779/a4efdd2f969559e8b1c92e99f32ded48e.jpg?x=767",
        "https://cimg.kgl-systems.io/camion/files/famitsu/74779/af99687dd719c4e8bc6a39e946c3d9ef7.jpg?x=767",
        "https://cimg.kgl-systems.io/camion/files/famitsu/74779/a2de40e0d504f583cda7465979f958a98.jpg?x=767",
        "https://cimg.kgl-systems.io/camion/files/famitsu/74779/a135007e7085979a7d5b41ce54c0e54d7.jpg?x=767"
    ]
  },
}


function GamePage() {
  const [count, setCount] = useState(0);
  const { id } = useParams();
  const [banner, setBanner] = useState("");
  const [title, setTitle] = useState("not defined tittle")
  const [description , setDecs] = useState()
  useEffect(() => {
    if (gamelist[id]) {
      setBanner(gamelist[id].banner);
      setTitle(gamelist[id].title);
      setDecs(gamelist[id].description);
    } else {
      // ekranas kad nera zaidimo rasta jei spesiu
    }
  }, [{}]);


  return (
    <div className='pb-[5vh]'>
      <Navbar />
      <div className='w-[50vw] h-fit mx-auto mt-[5vh] px-[2vw] py-[2vh] bg-blue-700/80 rounded-[2vh]'>
      <h1 className='text-center text-[4vh]'>COMING {gamelist[id].release ? gamelist[id].release : "soon"}</h1>
        <img  className="w-fit h-fit mx-auto" src={banner} alt={'banner of ${title}'} />
        <h1 className='text-center text-[4vh]'>{title}</h1>
        <p className='text-center text-[2vh]'> {description}</p>      
      </div>
      <div className='mx-[16vw] h-full m mt-[5vh] px-[2vw] py-[2vh] bg-blue-700/80 rounded-[2vh] mb-2vh'>
            <h1 className='text-center text-[5vh]'>Game photos</h1>
            
            <div className='flex flex-wrap justify-center w-full '>{gamelist[id].showcase.map((photo) => <a href={photo} target='_blank' ><img src={photo} className='mx-[1vw] my-[1vh] hover:drop-shadow-indigo-500 rounded-[1vh]  drop-shadow-2xl  hover:cursor-pointer' key={photo} alt={`${title} photo banner`} /> </a>)}</div> 
      </div>  


    </div>
  )
}

export default GamePage

import { useState } from 'react'
import Navbar from './components/navbar'
import gtabanner from './assets/gta6.webp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Navbar />
      <h1 className='text-center text-6xl pt-[2vh]'>Upcoming games</h1>
      <div className="container mx-auto mt-2.5">
        <div className='bg-indigo-950 p-[1vh] rounded-2xl'>
          <img src={gtabanner} className='rounded-2xl' alt="game banner" width="100%" height="60%" />
          <div className='mt-5'>
            <div className='flex items-end justify-center w-full'>
              <h2 className='text-4xl ml-2 flex-1 justify-start  '>1. Grand Theft Auto VI</h2>
                <div className='text-4xl justify-end bg-emerald-600 p-2 rounded-2xl'>Release 2026</div>
            </div>
               <p className='mt-5' >Grand Theft Auto VI is an upcoming action-adventure game developed and published by Rockstar Games. It is due to be the eighth main Grand Theft Auto game, following Grand Theft Auto V (2013)... Click to read more</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

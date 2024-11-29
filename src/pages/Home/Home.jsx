import React from 'react'
import Navbar from '../../components/common/Header/Navbar'
import Goku from '../../components/common/Goku'
import { GroupImage, level1Image } from '../../assets/common'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='w-full bg-[#F4F4F4]'>
        
  
        <div className='flex w-full px-12'>
            <div className='w-[80%] h-[30%]'>
                <Goku/>
            </div>
            <div className=' w-[60%] relative mt-24'>
                <div className='bg-[#5B9CF9] rotate-[18deg] absolute z-[10] w-[51%] h-[70%] top-[1.6rem]   rounded-xl'>
                </div>
                <div className='bg-white text-base text-black z-[20] absolute w-[45%] left-8 rounded-xl p-4 top-4'>
                    <p className='text-center font-bold text-3xl'>Hello Goku Here</p>
                    <div className='mt-2 text-xl'>
                        Welcome to our magical learning adventure! I’m Goku, and I’m so excited to help you discover new things.
                        So get ready to use your imagination and dive into a world where learning is an adventure.
                        Let’s start this amazing journey together and see all the cool things you can do!
                    </div>
                </div>
                
            </div>
      </div>


      <div className='px-24 mt-24 flex justify-center'>
       
            <div className='flex gap-20 items-center'>
                <div className='w-[40%]'>
                        <h1 className='text-3xl font-bold text-[#5B9CF9]'>LEARNING</h1>
                        <p className='text-5xl font-bold text-black mt-4'> Discover the Magic of Learning And Watch Your Imagination Soar!</p>
                        <p className='text-base font-normal mt-3'>Explore, Play, and Learn Where every day is a new adventure!</p>
                </div>
                <div className='bg-white'>
                    
                </div>
            </div>
   
      </div>
    
    <div className='px-12 mt-40'>
        <p className='text-2xl font-semibold text-center'>CLICK ON THE LEVEL TO PLAY</p>
        <div className='flex-col'>
            <div className='flex gap-6  justify-center items-center'>
                <div className='w-[30%] min-h-[20rem] relative flex items-center justify-center'>
                    <div className='bg-[#5B9CF9]  absolute z-20 w-[55%] h-[100%] top-4 rounded-full shadow-lg'>
                    </div> 
                    <div className="text-center text-black bg-white font-bold absolute w-[50%] h-[75%] z-30 ml-20 mb-12 shadow-lg rounded-xl text-[2.5rem] p-6">
                        <p className='absolute text-7xl rotate-12 '>A</p>
                        <p className='absolute text-7xl rotate-12 ml-20 mt-4'>B</p>
                        <p className='absolute text-7xl rotate-12 ml-40 '>C</p>
                        <p className='absolute text-7xl rotate-12 ml-12 mt-24'>D</p>
                        <p className='absolute text-7xl rotate-12 ml-32 mt-24'>E</p>
                    </div>
                </div>
                <div className='flex flex-col items-center w-[20%] mt-8'>
                    <div className='rounded-full w-10 h-10 bg-[#5B9CF9]' >
                    </div>
                    <div className='h-[22rem]  bg-[#5B9CF9] w-4 rounded-xl '>
                    </div>
                </div>

                <div className='bg-white text-base p-6 rounded-xl w-[30%]'>
                    <Link to={'/level1'} className='text-[#5B9CF9] font-bold text-3xl' >LEVEL 01</Link>
                    <p className='mt-4 font-semibold text-2xl '>The Power of Phonemes :</p>
                    <p className='text-xl  mt-2 font-medium text-justify'>Start your adventure by learning how to pronounce basic sounds, called phonemes! Get ready for fun challenges that help you build the foundations of language, setting you up for success as you progress through the game.</p>
                </div>
            </div>

            <div className='flex gap-6  justify-center items-center'>
                <div className='bg-white text-base p-6 rounded-xl w-[30%]'>
                    <Link to={'/level1'} className='text-[#5B9CF9] font-bold text-3xl' >LEVEL 02</Link>
                    <p className='mt-4 font-semibold text-2xl '>Play With Words :</p>
                    <p className='text-xl  mt-2 font-medium text-justify'>Take your pronunciation skills to the next level by exploring full words! Practice saying complete words, understanding how sounds combine to form them.</p>
                </div>
                <div className='flex flex-col items-center w-[20%]'>
                    <div className='rounded-full w-10 h-10 bg-[#5B9CF9]' >
                    </div>
                    <div className='h-[22rem]  bg-[#5B9CF9] w-4 rounded-xl '>
                    </div>
                </div>
                <div className='w-[30%] min-h-[20rem] relative flex items-center justify-center'>
                    <div className='bg-[#5B9CF9]  absolute z-20 w-[55%] h-[70%] top-4 rounded-xl shadow-lg'>
                    </div> 
                    <div className="text-center text-black bg-white font-bold absolute w-[55%] h-[70%] z-30 ml-20 mb-32 shadow-lg rounded-xl text-[2.5rem] p-4">HELLO HERE YOU LEARN WORDS</div>
                </div>
            </div>

            <div className='flex gap-6  justify-center items-center'>
                <div className='w-[30%] min-h-[20rem] relative flex items-center justify-center'>
                    <div className='bg-[#5B9CF9]  absolute z-20 w-[55%] h-[100%] top-4 rounded-full shadow-lg'>
                    </div> 
                    <div className="text-center uppercase text-black bg-white font-bold absolute w-[50%] h-[78%] z-30 ml-20 mb-12 shadow-lg rounded-xl text-[2.1rem] p-6 ">
                        Play With Some More Tough Words
                    </div>
                </div>
                <div className='flex flex-col items-center w-[20%]'>
                    <div className='rounded-full w-10 h-10 bg-[#5B9CF9]' >
                    </div>
                    <div className='h-[22rem]  bg-[#5B9CF9] w-4 rounded-xl '>
                    </div>
                </div>

                <div className='bg-white text-base p-6 rounded-xl w-[30%]'>
                    <Link to={'/level1'} className='text-[#5B9CF9] font-bold text-3xl' >LEVEL 03</Link>
                    <p className='mt-4 font-semibold text-2xl '>The Power of Phonemes :</p>
                    <p className='text-xl  mt-2 font-medium text-justify'>Start your adventure by learning how to pronounce basic sounds, called phonemes! Get ready for fun challenges that help you build the foundations of language, setting you up for success as you progress through the game.</p>
                </div>
            </div>
        </div>
    </div>

    </div>
  )
}

export default Home
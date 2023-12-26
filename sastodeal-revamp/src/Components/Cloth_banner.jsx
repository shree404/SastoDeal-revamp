import React from 'react'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import cloth_banner1 from "../Assests/cloth_banner1.png"
import cloth_banner2 from "../Assests/cloth_banner2.png"
import cloth_banner3 from "../Assests/cloth_banner3.png"


const Cloth_banner = () => {
  return (
    <div className='flex justify-around'>
        {/* for banner 1 */}
        <div className="relative  hover:shadow-xl cursor-pointer">
                <img src={cloth_banner1} />
                <div className='absolute top-3 left-72'>
                    <p className=' text-white bg-[#3C4242] w-40 text-center border border-r-2 p-2 font-bold mb-3 ml-8'>Limited Stock</p>

                    <h1 className=' font-extrabold text-3xl text-[#3C4242] text-right mb-3'>New <br/>Arrivals</h1>

                    <p className='font-bold text-sm text-[#3C4242] text-right mb-2'>Move with style & comfort</p>
                    <p className='font-bold text-lg text-[#3C4242] text-right mb-1'>UPTO 50% OFF</p>
                    <ArrowDownwardIcon sx={{color:"#3C4242", m:2,ml:10}}/>

                    <p className=' text-[#3C4242] border-[#3C4242]  w-36 text-center border border-r-2 p-2 font-bold ml-8 cursor-pointer'> Shop Now</p>
                </div>
        </div>

        {/* for banner 2 */}
        <div class="relative  hover:shadow-xl cursor-pointer">
                <img src={cloth_banner2} />
                <div className='absolute top-10 left-40'>

                    <h1 className=' font-extrabold text-3xl text-white text-right mb-3'>All About <br/> Her</h1>

                    <p className='font-bold text-sm text-white text-right mb-2'>New Designs Every Week</p>
                    <p className='font-bold text-lg text-white text-right mb-1'>UPTO 40% OFF</p>
                    <ArrowDownwardIcon sx={{color:"white", m:3.5,ml:10}}/>

                    <p className=' text-white border-white  w-36 text-center border border-r-2 p-2 font-bold cursor-pointer'> Shop Now</p>
                </div>
        </div>

        {/* for banner 3 */}
        <div class="relative  hover:shadow-xl cursor-pointer">
                <img src={cloth_banner3} />
                <div className='absolute top-10 left-5'>

                    <h1 className=' font-extrabold text-3xl text-white text-left mb-3'>All About <br/> Him</h1>

                    <p className='font-bold text-sm text-white text-left mb-2'>Dress up in summer vibe</p>
                    <p className='font-bold text-lg text-white text-left mb-1'>UPTO 50% OFF</p>
                    <ArrowDownwardIcon sx={{color:"white", m:3.5,ml:10}}/>

                    <p className=' text-white border-white  w-36 text-center border border-r-2 p-2 font-bold cursor-pointer'> Shop Now</p>
                </div>
        </div>


    </div>
  )
}

export default Cloth_banner;
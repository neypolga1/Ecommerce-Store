import React,{useState,useEffect,useRef} from 'react';

import { motion } from 'framer-motion';

import { Link } from 'react-router-dom';

import Hero from '../components/Hero';

import img1 from '.././img/jayson-hinrichsen-o0BX_omIUKY-unsplash.jpg'
import img2 from '.././img/dominik-kielbasa-35AIZbJqmx8-unsplash.jpg'
import img3 from '.././img/alexandar-todov-6vtsGipAadE-unsplash.jpg'
import bgSection from '../img/[removal.ai]_2c632252-f5a4-4e26-8e75-08652e9208ba-chyntia-juls-hlvji5wmoqy-unsplash.png'
import NikeImg from '../img/nike.png'
import NikeLogo from '../img/nike_logo.svg'
import NikeImg2 from '../img/pngwing.png'
import NikeImg3 from '../img/pngwing2.png'
import NikeImg4 from '../img/pngwing3.png'
import NikeImg5 from '../img/pngwing4.png'
import NikeImg6 from '../img/pngwing6.png'
import AppleImg from '../img/pngwing5.png'
import AdidasLogo from '../img/adidasLogo.svg'
import AppleLogo from '../img/appleLogo.svg'
import SamsungLogo from '../img/SamsungLogo.svg'
import { Shuffle } from '../components/Shuffle';


const Home = () => {
  const colors = [
    {value:'#116D6E'},
    {value:'#321E1E'},
    {value:'#E3651D'},
    {value:'#B99470'},
    {value:'#000000'}
  ]
  const carouselRef = useRef()
  const [width,setWidth] = useState(0)

  useEffect(()=>{
    setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth)
  },[])
  return <div>
    <Hero />
    <section ref={carouselRef} className='py-20 h-[680px] ' style={{backgroundColor:"#D8D9DA"}}>
      <h1 className='flex justify-center mb-12 font-semibold text-2xl uppercase'>trending products</h1>
      <motion.div drag='x' dragConstraints={{right:0,left:-width}}  className='flex gap-x-[200px]'>
          <div className='w-[300px] min-h-[350px] bg-[#c9c1b9] border-[4px] border-[#CDFAD5] rounded-[25px] px-[30px] py-[20px] cursor-grab relative'>
            <div className='mb-4'>
              <img src={NikeLogo} alt='' />
            </div>
            <h1 className='text-xl mb-4 font-extrabold'>Nike Air Max Pre-Day</h1>
            <p className='max-w-[400px] text-[#000000] mb-4'>Taking the classic look Of heritage Nike Running into
                        new realm,
            </p>
            <div className='flex items-center gap-x-[15px] mb-10'>
              <button className='bg-[#2d2d2c] text-white text-base font-meduim py-[8px] px-[16px] rounded-lg'>Add</button>
              <div className='text-[20px] font-bold text-[#00000]'>$458.99</div>
            </div>
            <ul className='flex gap-x-[6px]'>
              {
                colors.map((color,index)=>{
                  return(
                    <li key={index} style={{backgroundColor:color.value}} className='w-4 h-4 rounded-full cursor-pointer'></li>
                  )
                })
              }
            </ul>
            <div className='absolute top-32 -right-32 w-[300px] '>
              <img src={NikeImg} alt='' draggable='false' />
            </div>
          </div>
          <div className='w-[300px] min-h-[350px] bg-[#a3ccf3] border-[4px] border-[#CDFAD5] rounded-[25px] px-[30px] py-[20px] cursor-grab relative'>
            <div className='mb-4'>
              <img src={NikeLogo} alt='' />
            </div>
            <h1 className='text-xl mb-4 font-extrabold'>Nike Air Max Orange Outdor</h1>
            <p className='max-w-[400px] text-[#000000] mb-4'>Taking the classic look Of heritage Nike Running into
                        new realm,
            </p>
            <div className='flex items-center gap-x-[15px] mb-10'>
              <button className='bg-[#2d2d2c] text-white text-base font-meduim py-[8px] px-[16px] rounded-lg'>Add</button>
              <div className='text-[20px] font-bold text-[#00000]'>$458.99</div>
            </div>
            <ul className='flex gap-x-[6px]'>
              {
                colors.map((color,index)=>{
                  return(
                    <li key={index} style={{backgroundColor:color.value}} className='w-4 h-4 rounded-full cursor-pointer'></li>
                  )
                })
              }
            </ul>
            <div className='absolute top-32 -right-32 w-[220px] '>
              <img src={NikeImg2} alt='' draggable='false' />
            </div>
          </div>
          <div className='w-[300px] min-h-[350px] bg-[#d4d3cf] border-[4px] border-[#CDFAD5] rounded-[25px] px-[30px] py-[20px] cursor-grab relative'>
            <div className='mb-4'>
              <img src={AdidasLogo} alt='' />
            </div>
            <h1 className='text-xl mb-4 font-extrabold'>Adidas Yezzy 700</h1>
            <p className='max-w-[400px] text-[#000000] mb-4'>Taking the classic look Of heritage Nike Running into
                        new realm,
            </p>
            <div className='flex items-center gap-x-[15px] mb-10'>
              <button className='bg-[#2d2d2c] text-white text-base font-meduim py-[8px] px-[16px] rounded-lg'>Add</button>
              <div className='text-[20px] font-bold text-[#00000]'>$458.99</div>
            </div>
            <ul className='flex gap-x-[6px]'>
              {
                colors.map((color,index)=>{
                  return(
                    <li key={index} style={{backgroundColor:color.value}} className='w-4 h-4 rounded-full cursor-pointer'></li>
                  )
                })
              }
            </ul>
            <div className='absolute top-32 -right-32 w-[300px] '>
              <img src={NikeImg3} alt='' draggable='false' />
            </div>
          </div>
          <div className='w-[300px] min-h-[350px] bg-[#C46F8B] border-[4px] border-[#CDFAD5] rounded-[25px] px-[30px] py-[20px] cursor-grab relative'>
            <div className='mb-4'>
              <img src={AdidasLogo} alt='' />
            </div>
            <h1 className='text-xl mb-4 font-extrabold'>Flip-flops Adidas Sandals Slide</h1>
            <p className='max-w-[400px] text-[#000000] mb-4'>Taking the classic look Of heritage Nike Running into
                        new realm,
            </p>
            <div className='flex items-center gap-x-[15px] mb-10'>
              <button className='bg-[#2d2d2c] text-white text-base font-meduim py-[8px] px-[16px] rounded-lg'>Add</button>
              <div className='text-[20px] font-bold text-[#00000]'>$458.99</div>
            </div>
            <ul className='flex gap-x-[6px]'>
              {
                colors.map((color,index)=>{
                  return(
                    <li key={index} style={{backgroundColor:color.value}} className='w-4 h-4 rounded-full cursor-pointer'></li>
                  )
                })
              }
            </ul>
            <div className='absolute top-32 -right-32 w-[220px] '>
              <img src={NikeImg4} alt='' draggable='false' />
            </div>
          </div>
          <div className='w-[300px] min-h-[350px] bg-[#f9d9e8] border-[4px] border-[#CDFAD5] rounded-[25px] px-[30px] py-[20px] cursor-grab relative'>
            <div className='mb-4'>
              <img src={NikeLogo} alt='' />
            </div>
            <h1 className='text-xl mb-4 font-extrabold'>Hoodie T-shirt Clothing Crew neck</h1>
            <p className='max-w-[400px] text-[#000000] mb-4'>Taking the classic look Of heritage Nike Running into
                        new realm,
            </p>
            <div className='flex items-center gap-x-[15px] mb-10'>
              <button className='bg-[#2d2d2c] text-white text-base font-meduim py-[8px] px-[16px] rounded-lg'>Add</button>
              <div className='text-[20px] font-bold text-[#00000]'>$458.99</div>
            </div>
            <ul className='flex gap-x-[6px]'>
              {
                colors.map((color,index)=>{
                  return(
                    <li key={index} style={{backgroundColor:color.value}} className='w-4 h-4 rounded-full cursor-pointer'></li>
                  )
                })
              }
            </ul>
            <div className='absolute top-32 -right-32 w-[200px] '>
              <img src={NikeImg5} alt='' draggable='false' />
            </div>
          </div>
          <div className='w-[300px] min-h-[350px] bg-[#ff9375] border-[4px] border-[#CDFAD5] rounded-[25px] px-[30px] py-[20px] cursor-grab relative'>
            <div className='mb-4'>
              <img src={AppleLogo} alt='' className='w-[64px] h-[44px]'/>
            </div>
            <h1 className='text-xl mb-4 font-extrabold'>Apple Watch Ultra Orange</h1>
            <p className='max-w-[400px] text-[#000000] mb-4'>Taking the classic look Of heritage Nike Running into
                        new realm,
            </p>
            <div className='flex items-center gap-x-[15px] mb-10'>
              <button className='bg-[#2d2d2c] text-white text-base font-meduim py-[8px] px-[16px] rounded-lg'>Add</button>
              <div className='text-[20px] font-bold text-[#00000]'>$458.99</div>
            </div>
            <ul className='flex gap-x-[6px]'>
              {
                colors.map((color,index)=>{
                  return(
                    <li key={index} style={{backgroundColor:color.value}} className='w-4 h-4 rounded-full cursor-pointer'></li>
                  )
                })
              }
            </ul>
            <div className='absolute top-32 -right-32 w-[170px] '>
              <img src={AppleImg} alt='' draggable='false' />
            </div>
          </div>
          <div className='w-[300px] min-h-[350px] bg-[#F5F7F8] border-[4px] border-[#CDFAD5] rounded-[25px] px-[30px] py-[20px] cursor-grab relative'>
            <div className='mb-4'>
              <img src={SamsungLogo} alt='' className='w-[104px] h-[44px]'/>
            </div>
            <h1 className='text-xl mb-4 font-extrabold'>4K resolution Ultra Samsung TV</h1>
            <p className='max-w-[400px] text-[#000000] mb-4'>Taking the classic look Of heritage Nike Running into
                        new realm,
            </p>
            <div className='flex items-center gap-x-[15px] mb-10'>
              <button className='bg-[#2d2d2c] text-white text-base font-meduim py-[8px] px-[16px] rounded-lg'>Add</button>
              <div className='text-[20px] font-bold text-[#00000]'>$458.99</div>
            </div>
            <ul className='flex gap-x-[6px]'>
              {
                colors.map((color,index)=>{
                  return(
                    <li key={index} style={{backgroundColor:color.value}} className='w-4 h-4 rounded-full cursor-pointer'></li>
                  )
                })
              }
            </ul>
            <div className='absolute top-32 -right-32 w-[190px] '>
              <img src={NikeImg6} alt='' draggable='false' />
            </div>
          </div>
      </motion.div> 
    </section>
    <Shuffle />
    <section className='py-20 h-[680px]' style={{backgroundColor:"#F1EFEF"}}>
      <h1 className='flex justify-center mb-12 font-semibold text-2xl uppercase'>Shop By Category</h1>
      <div className='container mx-auto'>
        <div className='flex justify-around'>
            <Link to={'/clothesJewlery'} className='h-[300px] w-64 bg-cover bg-center shadow-lg rounded-lg -my-2 flex justify-center items-end text-2xl font-semibold text-white hover:shadow-2xl hover:opacity-80 transition-all duration-700 cursor-pointer' style={{backgroundImage:`url(${img1})`}}>Clothes</Link>
            <Link to={'/clothesJewlery'} className='h-[300px] w-64 bg-cover bg-center shadow-lg rounded-lg -my-2 flex justify-center items-end text-2xl font-semibold text-primary hover:shadow-2xl hover:opacity-80 transition-all duration-700 cursor-pointer' style={{backgroundImage:`url(${img2})`}}>Jewelery</Link>
            <Link to={'/electronic'} className='h-[300px] w-64 bg-cover bg-center shadow-lg rounded-lg -my-2 flex justify-center items-end text-2xl font-semibold text-white hover:shadow-2xl hover:opacity-80 transition-all duration-700 cursor-pointer' style={{backgroundImage:`url(${img3})`}}>Electronic</Link>
        </div>
      </div>
    </section>
    <section className='py-20 h-[680px]' style={{backgroundColor:"#CCC8AA"}}>
      <h1 className='flex justify-center mb-12 font-semibold text-gray-700 text-3xl uppercase'>What's New</h1>
      <div className='flex justify-between items-center gap-96 m-10 relative'>
        <div className='flex flex-col items-start gap-4'>
          <h2 className='text-primary text-2xl font-bold uppercase'>Make Your Life better</h2>
          <p className='w-1/2  text-gray-700 font-light text-sm '>A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic. Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs. This is because paragraphs show a reader where the subdivisions of an essay begin and end, and thus help the reader see the organization of the essay and grasp its main points.</p>
          <div className='bg-[#4c3324] text-white text-md font-primary rounded-lg py-2 px-4 cursor-pointer hover:bg-stone-900 transition-all duration-500'>More</div>
        </div>
        <div className='hidden lg:block'>
          <img className='absolute right-0 top-[-284px] h-[800px]' src={bgSection} alt='' />
        </div>
      </div>
    </section>
    <div className='border-b border-y-3 border-black'></div>
  </div>;
};

export default Home;

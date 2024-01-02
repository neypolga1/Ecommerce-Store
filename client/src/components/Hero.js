import React from 'react';

import bgHero from '../img/bgHero.png'
import { Link } from 'react-router-dom';

const Hero = () => {
  return <section className='h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-24'>
    <div className='container mx-auto flex justify-around h-full'>
      <div className='flex flex-col justify-center'>
        <div className='uppercase font-semibold flex items-center'>
          <div className='w-10 h-[3px] bg-red-500 mr-3'></div>
          <div className='text-yellow-300 '>New Trend</div>
        </div>
        <h1 className='text-white text-[70px] leading-[1.1] font-light mb-4'>
          NEY-SHOP SALE STYLESHIT <br/>
          <span className='font-semibold'>MEN</span>
        </h1>
        <Link to={'/'} className='text-white self-start uppercase font-semibold border-b-2 border-white hover:text-yellow-500 transition duration-300'>
          Discover More
        </Link>
      </div>
      <div className='hidden lg:block'>
        <img className='absolute right-0 top-0' src={bgHero} alt='' />
      </div>
    </div>
  </section>;
};

export default Hero;

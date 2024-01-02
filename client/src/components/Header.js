import React, { useContext, useEffect, useState } from 'react';

import {BsBag} from 'react-icons/bs'

import {SidebarContext} from '../contexts/SidebarContext'

import {CartContext} from '../contexts/CartContext';
import { Avatar } from "@material-tailwind/react";

import { Link } from 'react-router-dom';

import {LogInContext} from '../contexts/LogInContext';

import {UserContext} from '../contexts/UserContext'

import logo from '../img/logo2.svg'
import imgProfile from '../img/6596121.png'
import axios from 'axios';



const Header = () => {
  const {user} = useContext(UserContext)

  const {isLogIn,setIsLogIn} = useContext(LogInContext)
  useEffect(()=>{
    const use = localStorage.setItem('user',JSON.stringify(user))
  },[user])
  useEffect(()=>{
    const isLgin = localStorage.getItem("isLogIn")
    if(isLogIn !== null) setIsLogIn(JSON.parse(isLgin))
  },[])

  const [isActive,setIsActive] = useState(false)
  const {isOpen,setIsOpen} = useContext(SidebarContext)
  const {itemAmount} = useContext(CartContext)

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false)
    })
  },[])

  const logOut = async () =>{
    await axios.get("http://127.0.0.1:4545/logout",{ withCredentials: true }).then(({data})=>{
      localStorage.removeItem('user')
    });
    setIsLogIn(false)
  }

  return <header className={`${isActive ? 'bg-white py-4 shadow-md' : 'bg-none py-6'} fixed w-full z-10 transition-all`}>
    <div className='container mx-auto h-full flex justify-between items-center'>
      <Link to={'/'}>
        <div className='flex items-center'>
          <img className='w-[40px] sm:mr-8' src={logo} alt=''/>
          
        </div>
      </Link>
      <div className=''>
        <Link className={`${isActive ? 'text-primary hover:text-yellow-700' : 'text-yellow-700 hover:text-white'} lg:mr-12  lg:font-semibold md:mr-8 sm:mr-4  uppercase transition duration-300`} to={'/clothesJewlery'}>Clothes and Jewlery</Link>
        <Link className={`${isActive ? 'text-primary hover:text-yellow-700' : 'text-yellow-700 hover:text-white'} lg:mr-12  lg:font-semibold md:mr-8 sm:mr-4 sm:ml-6  uppercase transition duration-300`} to={'/electronic'}>Eloctronics</Link>
      </div>
      {user && <Link to={'/logIn'} onClick={logOut} className={`${isActive ? 'text-red-500  lg:bg-primary md:bg-transparent sm:bg-transparent font-semibold px-4 py-2 rounded-md lg:hover:bg-gray-500 lg:hover:text-white sm:hover:text-red-200 md:hover:text-red-200 transition duration-700 ml-2' : 'text-white  lg:bg-red-700 md:bg-transparent sm:bg-transparent font-semibold px-4 py-2 rounded-md lg:hover:bg-red-500 sm:hover:text-red-200 md:hover:text-red-200  transition duration-700'}`}>Log Out</Link>}     
      {!user && <><Link to={'/signUp'} className={`${isActive ? 'lg:text-yellow-500 lg:bg-primary md:bg-transparent md:text-black sm:bg-transparent sm:text-black font-semibold px-4 py-2 rounded-md hover:bg-gray-500 hover:text-white transition duration-700' : 'lg:text-black md:text-white sm:text-white  lg:bg-[#abaaaa] md:bg-yellow-500 md:bg-transparent font-semibold lg:px-4 lg:py-2 md:px-3 md:py-2  rounded-md lg:hover:bg-[#8a8a8a] lg:hover:scale-90 md:hover:bg-white sm:hover:text-yellow-500 transition duration-700'}`}>Sign Up</Link><Link to={'/logIn'} className={`${isActive ? 'lg:text-yellow-500 lg:bg-primary md:bg-transparent md:text-black sm:bg-transparent sm:text-black font-semibold px-4 py-2 rounded-md hover:bg-gray-500 hover:text-white transition duration-700' : 'lg:text-black md:text-white sm:text-white  lg:bg-[#abaaaa] md:bg-yellow-500 md:bg-transparent font-semibold lg:px-4 lg:py-2 md:px-3 md:py-2  rounded-md lg:hover:bg-[#8a8a8a] lg:hover:scale-90 md:hover:bg-white sm:hover:text-yellow-500 sm:mr-1 transition duration-700'}`}>Log In</Link></>}     
      <div onClick={()=>setIsOpen(!isOpen)} className='cursor-pointer flex relative '>  
        <BsBag className='text-2xl text-yellow-500 sm:mr-4 md:mr-4' />
        <div className={`${itemAmount > 0 ? 'bg-green-700': 'bg-red-500' } absolute -right-2 -bottom-2 h-[18px] w-[18px] text-[12px] text-white rounded-full flex justify-center items-center sm:mr-4 md:mr-4`}>{itemAmount}</div>
      </div>
      <div className='flex items-center'>
        {user && <Link to={'/profile'}><Avatar src={imgProfile} alt="avatar"/></Link>}
        <h3 className={`${isActive ? 'lg:font-semibold lg:text-2xl text-primary ml-6' : 'text-yellow-700 font-semibold text-2xl ml-4'}`}>{user && user.name}</h3>
      </div>
      </div>
  </header>;
};

export default Header;

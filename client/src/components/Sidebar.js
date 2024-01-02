import React,{ useContext } from 'react';
import { Link } from 'react-router-dom';
import {IoMdArrowForward} from 'react-icons/io';
import {FiTrash2} from 'react-icons/fi';

import CartItem from './CartItem'

import {SidebarContext} from '../contexts/SidebarContext'

import {CartContext} from '../contexts/CartContext'

const Sidebar = () => {
  const {isOpen,setIsOpen,handleClose} = useContext(SidebarContext)
  const {cart,setCart,clearCart,total,itemAmount} = useContext(CartContext)
  
  return (
  <div className={`${isOpen ? 'right-0' : '-right-full'} w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}>
    <div className='flex items-center justify-between py-6 border-b'>
      <div className='uppercase text-sm font-semibold'>
        Shopping bag ({itemAmount})
      </div>
      <div onClick={handleClose} className='cursor-pointer w-8 h-8 flex justify-center items-center'>
        <IoMdArrowForward className='text-2xl'/>
      </div>
    </div>
    <div className='flex flex-col gap-y-2 max-h-[460px]  lg:h-[480px] overflow-y-auto overflow-x-hidden border-b'>
      {cart.map(item=>{
      return <CartItem item={item} key={item.id}/>
      })}
      {console.log(cart)}
    </div>
    <div className='flex flex-col gap-y-3 py-4 mt-4'>
      <div className='flex justify-between items-center w-full'>
        <div className='uppercase font-semibold'>
          <span className='mr-2 '>Total:</span>$ {parseFloat(total).toFixed(2)}
        </div>
        <div onClick={()=>clearCart()} className='cursor-pointer flex justify-center items-center w-12 h-12 py-4 text-white text-xl bg-red-500'>
          <FiTrash2 />
        </div>
      </div>
      <Link to={'/'}  className='bg-gray-300 py-4 flex justify-center items-center font-medium w-full text-primary'>View Cart</Link>
      <Link to={'/'} onClick={()=>setIsOpen(!isOpen)}  className='bg-primary py-4 flex justify-center items-center font-medium w-full text-white'>Checkout</Link>
    </div>
  </div>
  );
};

export default Sidebar;

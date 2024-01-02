import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {IoMdAdd, IoMdClose, IoMdRemove} from 'react-icons/io'
import {CartContext} from '../contexts/CartContext'



const CartItem = ({item}) => {
  // const {title,price,image} = item.products
  const {id,amount,title,price,image} = item
  const {removeCart,addAmount,decAmount} = useContext(CartContext)
  

  return <div className='flex gap-x-4 py-2 lg:px-6 border-b border-gray-300 w-full font-light text-gray-500 shadow-md'>
    <div className='w-full min-h-[150px] flex items-center gap-x-4'>
      <Link to={`/product/${id}`}>
        <img className="max-w-[80px]" src={image} alt=''/>
      </Link>
      <div className='w-full flex flex-col'>
        <div className='flex justify-between mb-2'>
          <Link to={`/product/${id}`} className='text-sm uppercase font-medium max-w-[240px] text-primary hover:underline'>{title}</Link>
          <div className='text-xl cursor-pointer' onClick={()=>removeCart(id)}>
            <IoMdClose className='text-gray-500 hover:text-red-500 transition'/>
          </div>
        </div>
        <div className='flex gap-x-2 h-[36px] text-sm'>
          <div className='flex flex-1 max-w-[100px] items-center h-full border text-primary font-medium'>
            <div className='flex-1 flex justify-center items-center h-full cursor-pointer' onClick={()=>decAmount(id)}>
              <IoMdRemove />
            </div>
            <div className='h-full flex justify-center items-center px-2'>{amount}</div>
            <div className='flex-1 flex justify-center items-center h-full cursor-pointer' onClick={()=>addAmount(id)}>
              <IoMdAdd />
            </div>
          </div>
          <div className='flex-1 flex justify-around items-center text-gray-500'>$ {price}</div>
          <div className='flex-1 flex justify-end items-center text-primary font-medium'>{`$ ${parseFloat(price * amount).toFixed(2)}`}</div>
        </div>
      </div>
    </div>
  </div>;
};

export default CartItem;

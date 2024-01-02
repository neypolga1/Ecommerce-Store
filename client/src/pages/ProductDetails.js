import React,{useContext} from 'react';
import { Link, useParams } from 'react-router-dom';
import { HiArrowLeftOnRectangle } from "react-icons/hi2";
import {ProductContext} from '../contexts/ProductContext';
import {CartContext} from '../contexts/CartContext'

const ProductDetails = () => {
  const {id} = useParams()
  const {products} = useContext(ProductContext)
  const {addToCart} = useContext(CartContext)

  const product = products.find((item)=>{
    return item.id === parseInt(id)
  })
  console.log(product)

  if(!product){
    return(<section className='flex justify-center items-center h-screen'>
      <h1 className='font-semibold text-2xl'>Loading...</h1>
    </section>)
  }

  const {image,title,price,description} = product

  return <section className='pt-32 pb-12 lg:py-32 flex items-center h-screen'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row items-center'>
        <div className='flex flex-1 justify-center items-center mb-8 lg:mb-0'>
          <img className='max-w-[200px] lg:max-w-sm' src={image} alt='' />
        </div>
        <div className='flex-1 text-center lg:text-left'>
          <h1 className='text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0'>{title}</h1>
          <div className='text-xl text-red-500 font-medium mb-6'>$ {price}</div>
          <p className='mb-8'>{description}</p>
          <button onClick={()=>addToCart(product,product.id)} className='bg-primary rounded-full py-4 px-8 text-yellow-400 mr-8'>Add To Cart</button>
          <button  className='bg-gray-100 rounded-full py-4 px-8 text-red-700 mr-8'><Link to={'/'}>Continue Shopping</Link></button>
          
        </div>
      </div>
    </div>
  </section>;
};

export default ProductDetails;

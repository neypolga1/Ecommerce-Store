import React,{useContext} from 'react'
import Product from '../components/Product'
import { SearchBar } from '../components/SearchBar'
import {SearchContext} from '../contexts/SearchContext'

export const Electronic = ({electronicProduct}) => {
  const {searched} = useContext(SearchContext)
  const searchedProducts = electronicProduct.filter((product)=>product.title.toLowerCase().includes(searched.toLowerCase()))
  return (
    <section className='py-20'>
      <div className='container mx-auto'>
        <h1 className='flex justify-center mb-10 border-b py-6 font-semibold text-2xl uppercase'>Eloctronics</h1>
        <SearchBar />
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0 mt-12'>
          {searchedProducts.map((item)=><Product products={item} key={item.id} />)}
        </div>
      </div>
    </section>
  )
}

import React,{ createContext, useState, useEffect} from 'react';

//create context
export const ProductContext = createContext();

const ProductProvider = ({children}) => {
  // create product state
  const [products,setProducts]=useState([])

  //fetch products
  useEffect(()=>{
    const fetchProduct = async () => {
      const response = await fetch('https://fakestoreapi.com/products',{ mode: 'cors' });
      const data = await response.json();
      setProducts(data)
      
    };
    fetchProduct();
  },[]);
  return <ProductContext.Provider value={{products}}>{children}</ProductContext.Provider>;
};

export default ProductProvider;

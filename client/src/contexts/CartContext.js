import React,{useState,createContext, useEffect} from 'react';


export const CartContext = createContext()


const CartProvider = ({children}) => {
  const [cart,setCart] = useState([])
  const [total,setTotal] = useState(0)
  const [itemAmount,setAmount] = useState(0)

  useEffect(()=>{
    const amount = cart.reduce((acc,curr)=>{
      return acc + curr.amount
    },0)
    setAmount(amount)
  },[cart])


  useEffect(()=>{
    if(cart){
      const totalAcc = cart.reduce((acc,curr)=>{
        return acc + curr.amount * curr.price
      },0)
      setTotal(totalAcc)
    }
    
  },[cart])
  console.log(cart)
  const addToCart = (product) =>{
    const newItem = {...product,amount:1}
    const cartItem = cart.find((item)=>{
      return item.id === product.id;
    })
    console.log(newItem)
    console.log(product)
    if (cartItem) {
      // If item is already in the cart, update its amount
      const newCart = [...cart].map((item) => {
        if (item.id === product.id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      // If item is not in the cart, add the new item
      setCart([...cart, newItem]);
    }
    
    
  }
  const removeCart = (id) =>{
    const newCart = cart.filter((item)=>{
      return item.id !== id
    })
    setCart(newCart)
  }

  const clearCart = () =>{
    setCart([])
  }

  const addAmount = (id) =>{
    const item = cart.find((item)=>item.id === id)
    addToCart(item,id)
  }

  const decAmount = (id) => {
    const cartItem = cart.find((item)=>item.id === id)
    if(cartItem.amount >= 2){
      const newCart = cart.map((item)=>{
        if(item.id === id){
          return {...item,amount : cartItem.amount - 1}
        }else{
          return item
        }
      })
      setCart(newCart)
    }else{
      removeCart(id)
    }
  }

  
  
  return <CartContext.Provider value={{cart,setCart,addToCart,removeCart,decAmount,addAmount,clearCart,total,itemAmount}}>{children}</CartContext.Provider>;
};

export default CartProvider;

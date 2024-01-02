import React,{useContext} from 'react';
//Import react router dom
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { ProductContext } from './contexts/ProductContext';
import {Toaster} from 'react-hot-toast';

// import pages
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import SignUp from './pages/SignUp'

//import compenent
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';
import { Electronic } from './pages/Electronic';
import {ClothesJewlery} from './pages/ClothesJewlery'
import { LogIn } from './pages/LogIn';
import { Profile } from './pages/Profile';


 
const App = () => {
   //get products from product context
   const {products} = useContext(ProductContext)

   const filtredProducts = products.filter((product)=>{
     return product.category === "men's clothing" || product.category === "women's clothing" || product.category === "jewelery"
   })
   const electronicProduct = products.filter((product)=>{
     return product.category === "electronics"
   })
  return (
    <div className='overflow-hidden'>
        <Router>
          <Header />
          <Toaster position='top-center' toastOptions={{duration:4000}} />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/clothesJewlery' element={<ClothesJewlery  filtredProducts={filtredProducts}/>} />
            <Route path='/electronic' element={<Electronic electronicProduct={electronicProduct}/>} />
            <Route path='/product/:id' element={<ProductDetails />} />
            <Route path='/signUp' element={<SignUp />} />
            <Route path='/logIn' element={<LogIn />} />
            <Route path='/profile' element={<Profile />} />
          </Routes>
          <Sidebar />
          <Footer />
        </Router>
    </div>
  )
};

export default App;

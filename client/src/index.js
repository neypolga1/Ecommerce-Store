import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ProductProvider from './contexts/ProductContext';
import SidebarProvider from './contexts/SidebarContext';
import CartContextProvider from './contexts/CartContext';
import SearchProvider from './contexts/SearchContext';
import LogInProvider from './contexts/LogInContext';
import UserContextProvider from './contexts/UserContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserContextProvider>
    <SidebarProvider>
      <LogInProvider>
        <SearchProvider>
          <CartContextProvider>
            <ProductProvider>
              <React.StrictMode>
              <App />
              </React.StrictMode>
            </ProductProvider>
          </CartContextProvider>
        </SearchProvider>
      </LogInProvider>
    </SidebarProvider>
  </UserContextProvider>
);

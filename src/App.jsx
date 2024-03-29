import './App.css';
import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Cart from './components/Cart';
import NavBar from "./components/NavBar";
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import CartProvider from './context/CartContext';
import ContactForm from './components/ContactForm/contactForm';
import SobreMi from './components/SobreMi/sobreMi';
import Footer from './components/footer/footer';


function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
        <NavBar />
          <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:categoriaId' element={<ItemListContainer />} />
          <Route path='/cart' element={<Cart />} /> 
          <Route path='/sobreMi' element={<SobreMi />} />
          <Route path='/contactForm' element={<ContactForm />} />
          <Route path='/detalle/:detalleId' element={<ItemDetailContainer />} /> 
        </Routes>
        <Footer />
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;

import './App.css';

import Cart from './components/Cart';
import NavBar from "./components/NavBar";
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer texto='Bienvenidos a mi tienda!' />} />
          <Route path='/Categoria/:categoriaId' element={<ItemListContainer />} />
          <Route path='/cart' element={<Cart />} /> 
          <Route path='/detalle/:detalleId' element={<ItemDetailContainer />} /> 
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

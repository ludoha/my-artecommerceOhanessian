import './App.css';

import ItemListContainer from './components/ItemListContainer';
import NavBar from "./components/NavBar";
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <>
      <NavBar />
      <ItemDetailContainer />
      <ItemListContainer texto='Bienvenidos a mi tienda!' />
    </>
  );
}

export default App;

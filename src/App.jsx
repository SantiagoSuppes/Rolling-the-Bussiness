import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router';
import NavBar from './components/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer.jsx';
import Bienvenida from './components/Bienvenida.jsx';
import Cart from './components/Cart.jsx';


function App() {
  return (
    <BrowserRouter>

      <NavBar/>

      <Routes>

        {/* <Route path='/' element={<Bienvenida bienvenida={"Hello! Welcome to Rolling the Bussiness"} />} /> */}
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/products' element={<ItemListContainer/>}/>
        <Route path='/products/:id' element={<ItemDetailContainer/>}/>
        <Route path='/cart' element={<Cart/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;

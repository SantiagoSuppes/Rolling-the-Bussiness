import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router';
import NavBar from './components/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer.jsx';
import Cart from './components/Cart.jsx';
import CheckoutContainer from './components/CheckoutContainer.jsx';


function App() {

  return (
    <BrowserRouter>

      <NavBar/>

      <Routes>

        {/* <Route path='/' element={<Bienvenida bienvenida={"Hello! Welcome to Rolling the Bussiness"} />} /> */}
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/products/' element={<ItemListContainer/>}/>
        <Route path='/products/:id' element={<ItemDetailContainer/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<CheckoutContainer/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;

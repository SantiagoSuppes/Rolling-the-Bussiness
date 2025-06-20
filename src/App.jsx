import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router';
import NavBar from './components/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer.jsx';
import Bienvenida from './components/Bienvenida.jsx';


function App() {
  return (
    <BrowserRouter>

      <NavBar/>

      <Routes>

        {/* <Route path='/' element={<Bienvenida bienvenida={"Hello! Welcome to Rolling the Bussiness"} />} /> */}
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/categories/:categoryId/products' element={<ItemListContainer/>}/>
        <Route path='/products/:id' element={<ItemDetailContainer/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;

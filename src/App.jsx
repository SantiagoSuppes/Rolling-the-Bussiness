import './App.css';
import NavBar from './components/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';
import Bienvenida from './components/Bienvenida.jsx'

function App() {
  return (
    <>
      <header className='py-6'>

        <NavBar/>

      </header>

      <Bienvenida bienvenida='Hola, bienvenido a Rolling the Bussiness!'/>


      <section id='itemsSection'>

        <ItemListContainer />

      </section>
    
    </>
  );
}

export default App;

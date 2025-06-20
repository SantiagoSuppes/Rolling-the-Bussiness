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

      <Bienvenida bienvenida='Hello! Welcome to Rolling the Bussiness.'/>


      <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 mx-8 mt-16'>

        <ItemListContainer />

      </section>
    
    </>
  );
}

export default App;

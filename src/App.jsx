import './App.css';
import NavBar from './components/navbar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <>
    <header className='py-6'>

      <NavBar/>

    </header>

    <section className=' min-h-screen mx-6'>

      <ItemListContainer texto='Hola, bienvenido a Rolling the Bussiness!'/>

    </section>
    
    </>
  );
}

export default App

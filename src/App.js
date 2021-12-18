import './App.css';
import Cradle  from './Components/Header';
import Navbar from './Components/Navbar/Navbar'; 
import {CradleOfFilth} from './Components/CradleOfFilth';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
      <div className="App">
        <div className='Header'>
          <Cradle/>
          <Navbar/>
        </div>
          
            <CradleOfFilth />
          
            <About/>
            <Footer/> 
        
      </div>
    </>
  );
}

export default App; 

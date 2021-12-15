import './App.css';
import Cradle  from './Components/Header';
import Navbar from './Components/Navbar/Navbar'; 
import {CradleOfFilth} from './Components/Images/CradleOfFilth';
import {CradeKanye} from './Components/Images/CradeKanye';
import {Cradle3} from './Components/Images/Cradle3';
import {Cradle4} from './Components/Images/Cradle4';
import {Cradle5} from './Components/Images/Cradle5';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
      <div className="App">
        <Cradle/>
        <Navbar/>
        </div>
      <div>
        <CradleOfFilth/>
        <CradeKanye/>
        <Cradle3/>
        <Cradle4/>
        <Cradle5/>
      </div>
      <div>
        <About/>
      </div>
      <div>
        <Footer/>
      </div>
    </>
  );
}

export default App; 

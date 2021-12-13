import './App.css';
import Cradle  from './Components/Header';
import Navbar from './Components/Navbar/Navbar'; 
import CradleOfFilth from './Components/Images/CradleOfFilth';


function App() {
  return (
    <>
      <div className="App">
        <Cradle/>
        <Navbar/>
        <button>The band's nudes</button> 
        </div>
      <div>
        <CradleOfFilth/>
      </div>
    </>
  );
}

export default App;

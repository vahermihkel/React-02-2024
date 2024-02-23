// import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from "react-router-dom";
import Avaleht from './pages/Avaleht';
import Esindused from './pages/Esindused';
import Ariklient from './pages/Ariklient';
import Kinkekaart from './pages/Kinkekaart';
import LisaToode from './pages/LisaToode';
import Ostukorv from './pages/Ostukorv';
import Seaded from './pages/Seaded';
import NotFound from './pages/NotFound';


function App() {
  return (
    <div className="App">
      <Link to="/avaleht">
        <img className="pilt" src="https://upload.wikimedia.org/wikipedia/en/9/99/Nobe_GT100.jpg" alt="Nobe elektriauto" />    
      </Link>

      <Link to="/esindused">
        <button className="nupp">Esindused</button>  
      </Link>

      <Link to="/arikliendile">
        <button className="nupp">Äriklient</button>  
      </Link>

      <Link to="/osta-kinkekaart">
        <button className="nupp">Kinkekaart</button>  
      </Link>

      <Link to='/lisa-toode'>
        <button className='nupp'>Lisa toode</button>
      </Link>

      <Link to='/ostukorv'>
        <button className='nupp'>Ostukorv</button>
      </Link>

      <Link to='/seaded'>
        <button className='nupp'>Seaded</button>
      </Link>

      <Routes>
        <Route path="avaleht" element={ <Avaleht /> }  />
        <Route path="esindused" element={ <Esindused /> }  />
        <Route path="arikliendile" element={ <Ariklient /> }  />
        <Route path="osta-kinkekaart" element={ <Kinkekaart /> }  />
        <Route path="lisa-toode" element={ <LisaToode /> }  />
        <Route path="ostukorv" element={ <Ostukorv /> }  />
        <Route path="seaded" element={ <Seaded /> }  />
        <Route path="*" element={ <NotFound /> }  />
      </Routes>
    </div>
  );
}

export default App;

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
import Hinnad from './pages/Hinnad';
import Tootajad from './pages/Tootajad';
import Tooted from './pages/Tooted';
import HaldaTooted from './pages/HaldaTooted';
import HaldaEsindused from './pages/HaldaEsindused';
import HaldaHinnad from './pages/HaldaHinnad';
import HaldaTootajad from './pages/HaldaTootajad';
import LisaHind from './pages/LisaHind';
import LisaEsindus from './pages/LisaEsindus';
import LisaTootaja from './pages/LisaTootaja';


function App() {
  return (
    <div className="App">
      <Link to="/">
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

      <Link to='/ostukorv'>
        <button className='nupp'>Ostukorv</button>
      </Link>

      <Link to='/seaded'>
        <button className='nupp'>Seaded</button>
      </Link>

      <Link to='/hinnad'>
        <button className='nupp'>Hinnad</button>
      </Link>

      <Link to='/tootajad'>
        <button className='nupp'>Töötajad</button>
      </Link>

      <Link to='/tooted'>
        <button className='nupp'>Tooted</button>
      </Link>

      <br /><br />

      <Link to='/halda-tooted'>
        <button className='nupp'>Halda tooteid</button>
      </Link>

      <Link to='/halda-esindused'>
        <button className='nupp'>Halda esindusi</button>
      </Link>

      <Link to='/halda-hinnad'>
        <button className='nupp'>Halda hindu</button>
      </Link>

      <Link to='/halda-tootajad'>
        <button className='nupp'>Halda töötajaid</button>
      </Link>

      <Link to='/lisa-toode'>
        <button className='nupp'>Lisa toode</button>
      </Link>

      <Link to='/lisa-hind'>
        <button className='nupp'>Lisa hind</button>
      </Link>

      <Link to='/lisa-esindus'>
        <button className='nupp'>Lisa esindus</button>
      </Link>

      <Link to='/lisa-tootaja'>
        <button className='nupp'>Lisa töötaja</button>
      </Link>

      <Routes>
        <Route path="" element={ <Avaleht /> }  />
        <Route path="esindused" element={ <Esindused /> }  />
        <Route path="arikliendile" element={ <Ariklient /> }  />
        <Route path="osta-kinkekaart" element={ <Kinkekaart /> }  />
        <Route path="lisa-toode" element={ <LisaToode /> }  />
        <Route path="ostukorv" element={ <Ostukorv /> }  />
        <Route path="seaded" element={ <Seaded /> }  />
        <Route path="hinnad" element={ <Hinnad /> }  />
        <Route path="tootajad" element={ <Tootajad /> }  />
        <Route path="tooted" element={ <Tooted /> }  />
        <Route path="halda-tooted" element={ <HaldaTooted /> }  />
        <Route path="halda-esindused" element={ <HaldaEsindused /> }  />
        <Route path="halda-hinnad" element={ <HaldaHinnad /> }  />
        <Route path="halda-tootajad" element={ <HaldaTootajad /> }  />
        <Route path="lisa-hind" element={ <LisaHind /> }  />
        <Route path="lisa-esindus" element={ <LisaEsindus /> }  />
        <Route path="lisa-tootaja" element={ <LisaTootaja /> }  />
        <Route path="*" element={ <NotFound /> }  />
      </Routes>
    </div>
  );
}

export default App;

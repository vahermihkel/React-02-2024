// import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from "react-router-dom";
import Avaleht from './pages/Avaleht';
import Esindused from './pages/Esindused';
import Ariklient from './pages/Ariklient';
import Kinkekaart from './pages/Kinkekaart';


function App() {
  return (
    <div className="App">
      <Link to="avaleht">
        <img className="pilt" src="https://upload.wikimedia.org/wikipedia/en/9/99/Nobe_GT100.jpg" alt="Nobe elektriauto" />    
      </Link>

      <Link to="esindused">
        <button className="nupp">Esindused</button>  
      </Link>

      <Link to="arikliendile">
        <button className="nupp">Äriklient</button>  
      </Link>

      <Link to="osta-kinkekaart">
        <button className="nupp">Kinkekaart</button>  
      </Link>

      <Routes>
        <Route path="avaleht" element={ <Avaleht /> }  />
        <Route path="esindused" element={ <Esindused /> }  />
        <Route path="arikliendile" element={ <Ariklient /> }  />
        <Route path="osta-kinkekaart" element={ <Kinkekaart /> }  />
      </Routes>
    </div>
  );
}

export default App;

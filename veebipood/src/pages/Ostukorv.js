import React, { useState } from "react";
import { Link } from "react-router-dom";

function Ostukorv() {
  const [ostukorv, setOstukorv] = useState(["Coca","Fanta","Sprite"]);

  const kustutaOstukorvist = (jrknr) => {
    ostukorv.splice(jrknr, 1); 
    setOstukorv(ostukorv.slice());
  }

  return (
    <div>
      <div>Ostukorv</div>
      <div>Ostukorvis on: {ostukorv.length} eset</div>
     {ostukorv.length === 0 && 
      <div className='ostukorv'>
        <img
          src='https://as2.ftcdn.net/v2/jpg/00/33/04/93/1000_F_33049387_PCNOkj6P1V84bB38LcoC19qshygMAYAP.jpg'
          alt='empty shopping cart'
        />
        <p>Ostukorv on hetkel tühi.</p>
      </div>}

      <button onClick={() => setOstukorv([])}>Tühjenda</button>
      <button onClick={() => setOstukorv(["Coca", "Fanta"])}>Jäta alles Coca ja Fanta</button>

      <div>{ostukorv.map((toode, jrknr) => 
        <div key={jrknr}>
          {toode}
          <button onClick={() => kustutaOstukorvist(jrknr)}>x</button>
        </div> )}
      </div>

      <Link to='/'>
        <button>Tagasi</button>
      </Link>
    </div>
  );
}

export default Ostukorv;
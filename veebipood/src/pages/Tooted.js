import React, { useState } from 'react';
import tootedFailist from '../data/tooted.json'
import { Link } from 'react-router-dom';
 
function Tooted() {
  // Andmete algväärtus
  const [tooted, setTooted] = useState(tootedFailist);
 
  // Funktsioon A-Z järgi sorteerimiseks
  const sorteeriAZ = () => {
    tooted.sort((a, b) => a.localeCompare(b));
    setTooted(tooted.slice());
  };
 
  // Funktsioon Z-A järgi sorteerimiseks
  const sorteeriZA = () => {
    tooted.sort((a, b) => b.localeCompare(a));
    setTooted(tooted.slice());
  };
 
  return (
    <div>
      <h2>Tooted</h2>
      {/* Väljastame tooted */}
      <ul>
        {tooted.map((toode, index) => (
          <div key={index}>
            {/*   {"nimi": "Nobe", "hind": 25000, "aktiivne": true, "pilt": ""}, 
            Objects are not valid as a React child (found: object with keys {nimi, hind, aktiivne, pilt})
            */}
            <img className={toode.aktiivne ? "pilt" : "pilt-mitteaktiivne"} src={toode.pilt} alt="" />
            <div>{toode.nimi}</div>
            <div>{toode.hind} €</div>
            {/* esimene / kui jääb ära, siis liidab olemasolevale URLle
            kui teine / jääb ära, siis liidab URLi ja numbri kokku */}
            <Link to={"/toode/" + index}>
              <button>Vaata lähemalt</button>
            </Link>
          </div>
        ))}
      </ul>
      {/* Näitame toodete kogust */}
      <p>Kokku on {tooted.length} toodet.</p>
      {/* Nupud sorteerimiseks */}
      <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
      <button onClick={sorteeriZA}>Sorteeri Z-A</button>
    </div>
  );
}
 
export default Tooted;
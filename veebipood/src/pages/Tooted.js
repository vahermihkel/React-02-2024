import React, { useState } from 'react';
import tootedFailist from '../data/tooted.json'
 
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
          <div key={index}>{toode}</div>
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
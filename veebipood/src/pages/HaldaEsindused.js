import React, { useState } from "react"; 
import keskusedFailist from '../data/tallinn.json'; // Impordime tallinna keskuste andmed

// ÄRGE TEHKE TABELIT
// 1. Copy-paste import
// 2. Copy-paste useState
// 3. Copy-paste .map()
// 4. Cut kustutamise funktsioon
// 5. Esindused.js sees kustuta Button mis funktsiooni välja kutsub
// 6. keskused.splice() asemel halda sees, tuleb panna keskusedFailist.splice()

function HaldaEsindused() {
  const [keskused, setKeskused] = useState(keskusedFailist);

  const kustutaEsindus = (index) => {
    keskusedFailist.splice(index, 1);
    setKeskused(keskusedFailist.slice());
  }
  
  return (
    <div>
      <h2>Keskuste nimekiri</h2>
      <table className="table"></table>
      <thead>
        <tr>
          <th>Nimi</th>
          <th>Eemalda</th>
        </tr>
      </thead>
      {keskused.map((keskus, index) => 
            <tr key={index}>
              <td>{keskus}</td>
              <td><button onClick={() => kustutaEsindus(index)}>x</button></td>
            </tr> )} 
    </div>
  )
}

export default HaldaEsindused
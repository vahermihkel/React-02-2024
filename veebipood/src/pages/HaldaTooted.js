import React, { useState } from 'react'
import tootedFailist from "../data/tooted.json";

function HaldaTooted() {
  const [tooted, setTooted] = useState(tootedFailist);

  const kustutaToode = (index) => {
    tootedFailist.splice(index,1);
    setTooted(tootedFailist.slice());
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Toote nimi</th>
            <th>Toote hind</th>
            <th>Kustuta</th>
            <th>Muuda</th>
          </tr>
        </thead>
        <tbody>
          {tooted.map((toode, index) => 
            <tr key={index}>
              <td>{toode}</td>
              <td>5€</td>
              <td><button onClick={() => kustutaToode(index)}>x</button></td>
              <td><button>Muuda</button></td>
            </tr> )}
        </tbody>
      </table>
    </div>
  )
}

export default HaldaTooted
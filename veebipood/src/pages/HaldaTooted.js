import React, { useState } from 'react'
import tootedFailist from "../data/tooted.json";
import { Link } from 'react-router-dom';

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
            <th>Toote pilt</th>
            <th>Toote nimi</th>
            <th>Toote hind</th>
            <th>Kustuta</th>
            <th>Muuda</th>
          </tr>
        </thead>
        <tbody>
          {tooted.map((toode, jrknr) => 
            <tr key={jrknr}>
              <td><img className="pilt" src={toode.pilt} alt="" /></td>
              <td>{toode.nimi}</td>
              <td>{toode.hind}€</td>
              <td><button onClick={() => kustutaToode(jrknr)}>x</button></td>
              <td>
                <Link to={"/muuda-toode/" + jrknr}>
                 <button>Muuda</button>
                </Link>
              </td>
            </tr> )}
        </tbody>
      </table>
    </div>
  )
}

export default HaldaTooted
import React, { useState } from 'react'
import tootajadFailist from '../data/tootajad.json'

// 1. Importima tootajad.json faili
// 2. useState algväärtuseks selle faili sisu
// 3. Tee tabel ja kuva töötajad välja
// 4. Tehke kustutamise funktsioon, mis kustutab failist
// 5. Siduge ära funktsioon HTMLs nupuga
// 6. Kontrollige, et kui siin kustutate, siis kustuks ka Töötajad vaates
// Failist ei kustu. Refreshiga ilmub tagasi.

function HaldaTootajad() {

  const [tootajad, setTootajad] = useState(tootajadFailist)

  const kustutaTootaja = (index) => {
    tootajadFailist.splice(index, 1);
    setTootajad(tootajadFailist.slice());
  }
  
  return (
    <div>
      <h2>Tootajate nimekiri</h2>
      <table className='table'>
        <thead>
    <tr>
      <th>Nimi</th>
      <th>Eemalda</th>
    </tr>
        </thead>
        <tbody>
          {tootajad.map((tootaja, index) =>
          <tr key={index}>
            <td>{tootaja}</td>
            <td><button onClick={() => kustutaTootaja(index)}>x</button></td>
          </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default HaldaTootajad
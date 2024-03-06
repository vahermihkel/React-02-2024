import React, { useState } from 'react';
import tootajateNimed from '../data/tootajad.json';
 
function Tootajad() {
  const [tootajad, setTootajad] = useState(tootajateNimed);
 
  // Tühjendab töötajate nimekirja
  const tyhjendaTootajad = () => {
    setTootajad([]);
  };

  // const sorteeriAZ2 = () => {
  //   const sorteeriTootajad = [...tootajad].sort((a, b) => a.localeCompare(b))
  //   setTootajad(sorteeriTootajad)
  // }
 
  const sorteeriAZ = () => {
    tootajad.sort((a, b) => a.localeCompare(b))
    setTootajad(tootajad.slice());
  }
 
  const sorteeriZA = () => {
    tootajad.sort((a, b) => b.localeCompare(a))
    setTootajad(tootajad.slice());
  }
 
  const sorteeriTahedKasvavalt = () => {
    tootajad.sort((a, b) => a.length - b.length)
    setTootajad(tootajad.slice());
  }
 
  const sorteeriTahedKahanevalt = () => {
    tootajad.sort((a, b) => b.length - a.length)
    setTootajad(tootajad.slice());
  }
 
  const sorteeriKolmasTahtAZ = () => {
    tootajad.sort((a, b) => a[2].localeCompare(b[2]))
    setTootajad(tootajad.slice());
  }
 
  const sorteeriKolmasTahtZA = () => {
    tootajad.sort((a, b) => b[2].localeCompare(a[2]))
    setTootajad(tootajad.slice());
  }
 
  const filtreeri3T2helised = () => {
    const vastus = tootajad.filter(tootajad => tootajad.length === 3);
    setTootajad(vastus);
  };
 
  const filtreeriRohT2helised = () => {
    const vastus = tootajad.filter(tootajad => tootajad.length >= 5);
    setTootajad(vastus);
  };
 
  const filtreeriAiSisaldavad = () => {
    const vastus = tootajad.filter(tootajad => tootajad.includes('ai'));
    setTootajad(vastus);
  };
 
  const filtreeriKelKolmasT2htI = () => {
    const vastus = tootajad.filter(tootajad => tootajad[2] === 'i')
    setTootajad(vastus);
  };
 
  const filtreeriAlgabTahtA = () => {
    const vastus = tootajad.filter(tootajad => tootajad.startsWith('A'))
    setTootajad(vastus);
  }
 
  return (
    <div>
      <div>Töötajad</div>
      {/* Kuvab kõik töötajad */}
      <ul>
        {tootajad.map((tootaja, index) => (
          <div key={index}>{tootaja}</div>
        ))}
      </ul>
 
      {/* Näitab töötajate koguarvu */}
      <div>Kokku on {tootajad.length} töötajat.</div>
 
      {/* Nupp töötajate tühjendamiseks */}
      <button onClick={tyhjendaTootajad}>Tühjenda</button>
      <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
      <button onClick={sorteeriZA}>Sorteeri Z-A</button>
      <button onClick={sorteeriTahedKasvavalt}>Sorteeri t2hed kasvavalt</button>
      <button onClick={sorteeriTahedKahanevalt}>Sorteeri t2hed kahanevalt</button>
      <button onClick={sorteeriKolmasTahtAZ}>Sorteeri kolmas t2ht AZ</button>
      <button onClick={sorteeriKolmasTahtZA}>Sorteeri kolmas t2ht ZA</button>
 
      <button onClick={filtreeri3T2helised}>J2ta alles 3 t2helised</button>
      <button onClick={filtreeriRohT2helised}>J2ta alles rohkem kui 5 t2helised</button>
      <button onClick={filtreeriAiSisaldavad}>J2ta alles kes sisaldavad 'ai' lyhendit</button>
      <button onClick={filtreeriKelKolmasT2htI}>J2ta alles kellel on kolmas t2ht 'i'</button>
      <button onClick={filtreeriAlgabTahtA}>J2ta alles kes algab A-ga'</button>
    </div>
  );
}
 
export default Tootajad;
 
 
// sorteeri: A-Z
// sorteeri: Z-A
// tähemärgid kasvavalt
// tähemärgid kahanevalt
// teine täht A-Z
// kolmas täht Z-A
 
// filtreeri:
// Kolmetähelised
// Rohkem kui 5 tähelised
// "ai" lühendit sisaldavad
// Kellel on kolmas täht "i"
// 'A' tähega algavad
 
// Huvitav: Paarisarv tähti
 
// Saab lisada läbi inputi (ref)
// Igaüht saab kustutada

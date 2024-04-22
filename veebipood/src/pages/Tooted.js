import React, { useState } from 'react';
import tootedFailist from '../data/tooted.json'
import { Link } from 'react-router-dom';
import ostukorvFailist from '../data/ostukorv.json'
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { add } from '../store/kogusumma'
 
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

  // const filtreeriNgaAlgavad = () => {
  //   const vastus = tootedFailist.filter(toode => toode.nimi.startsWith("N"));
  //   setTooted(vastus);
  // }

  // const filtreeriBgaAlgavad = () => {
  //   const vastus = tootedFailist.filter(toode => toode.nimi.startsWith("B"));
  //   setTooted(vastus);
  // }

  // const filtreeriTgaAlgavad = () => {
  //   const vastus = tootedFailist.filter(toode => toode.nimi.startsWith("T"));
  //   setTooted(vastus);
  // }

  const filtreeriAlgusTaheJargi = (algustaht) => {
    const vastus = tootedFailist.filter(toode => toode.nimi.startsWith(algustaht));
    setTooted(vastus);
  }

  const dispatch = useDispatch()

  const lisaOstukorvi = (lisatavToode) => {
    ostukorvFailist.push(lisatavToode);
    toast.success("Edukalt ostukorvi lisatud!");
    dispatch(add(lisatavToode.hind));
  }
 
  return (
    <div>
      <h2>Tooted</h2>
      {/* Väljastame tooted */}
      {/* <button onClick={filtreeriNgaAlgavad}>Jäta alles Nga algavad</button>
      <button onClick={filtreeriBgaAlgavad}>Jäta alles Bga algavad</button>
      <button onClick={filtreeriTgaAlgavad}>Jäta alles Tga algavad</button> */}
      <button onClick={() => filtreeriAlgusTaheJargi("N")}>Jäta alles Nga algavad</button>
      <button onClick={() => filtreeriAlgusTaheJargi("B")}>Jäta alles Bga algavad</button>
      <button onClick={() => filtreeriAlgusTaheJargi("T")}>Jäta alles Tga algavad</button>
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
            <button disabled={toode.aktiivne === false} onClick={() => lisaOstukorvi(toode)}>Lisa ostukorvi</button>
          </div>
        ))}
      </ul>
      {/* Näitame toodete kogust */}
      <p>Kokku on {tooted.length} toodet.</p>
      {/* Nupud sorteerimiseks */}
      <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
      <button onClick={sorteeriZA}>Sorteeri Z-A</button>
      <ToastContainer />
    </div>
  );
}
 
export default Tooted;
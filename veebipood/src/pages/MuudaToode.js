import React, { useRef } from 'react'
import tootedFailist from "../data/tooted.json";
import { useParams } from 'react-router-dom';

function MuudaToode() {

  const { indeks } = useParams();
  const leitud = tootedFailist[indeks];
  const nimiRef = useRef();
  const hindRef = useRef();
  const piltRef = useRef();
  const aktiivneRef = useRef();

  if (leitud === undefined) {
    return <div>Toodet ei leitud</div> // EARLY RETURN
  }

  // const cars = ["Volvo", "Jeep", "Mercedes"];
  // cars[0] = "Ford";
  const muuda = () => {
    tootedFailist[indeks] = {
      "nimi": nimiRef.current.value, 
      "hind": Number(hindRef.current.value), 
      "pilt": piltRef.current.value, 
      "aktiivne": aktiivneRef.current.checked
    };
    //{"nimi": "Tesla", "hind": 85000, "aktiivne": false, "pilt": ""} = {"nimi": "Tesla Model X", ... }

  }

  return (
    <div>
      <label>Nimi</label> <br />
      <input ref={nimiRef} defaultValue={leitud.nimi} type="text" /> <br />
      <label>Hind</label> <br />
      <input ref={hindRef} defaultValue={leitud.hind} type="number" /> <br />
      <label>Pilt</label> <br />
      <input ref={piltRef} defaultValue={leitud.pilt} type="text" /> <br />
      <label>Aktiivne</label> <br />
      <input ref={aktiivneRef} defaultValue={leitud.aktiivne} type="checkbox" /> <br />
      <button onClick={muuda}>Muuda</button> <br />
    </div>
  )
}

export default MuudaToode
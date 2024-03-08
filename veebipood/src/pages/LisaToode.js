import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import tootedFailist from "../data/tooted.json";

function LisaToode() {
  const [sonum, uuendaSonum] = useState("");
  const inputiLuger = useRef();
  const hindLuger = useRef();
  const piltRef = useRef();
  const aktiivneRef = useRef();

  const lisa = () => {
    if (inputiLuger.current.value === "") {
      uuendaSonum("Tühja nimetusega ei saa toodet lisada!");
    } else {
      uuendaSonum(
        "Toode lisatud: " + 
        inputiLuger.current.value + 
        ". Hind - " + 
        hindLuger.current.value
      );
      tootedFailist.push({
        "nimi": inputiLuger.current.value, 
        "hind": Number(hindLuger.current.value), 
        "aktiivne": aktiivneRef.current.checked, 
        "pilt": piltRef.current.value
      });
    }
  }

  // function lisa() {

  // }

  return (
    <div>
      <div>LisaToode</div>
      <div>
          <label>Toote nimi: </label>
          <input ref={inputiLuger} type='text' />
          <br /> <br />
          <label>Toote hind: </label>
          <input ref={hindLuger} type='number' />
          <br /> <br />
          <label>Toote pilt: </label>
          <input ref={piltRef} type='text' />
          <br /> <br />
          <label>Toote aktiivsus: </label>
          <input ref={aktiivneRef} type='checkbox' />
          <br /> <br />
          <button onClick={lisa}>Sisesta</button>
        <p style={{color: "red", backgroundColor: "lightgray"}}>
          {sonum}
        </p>
      </div>
      <Link to='/'>
        <button>Tagasi</button>
      </Link>
    </div>
  );
}

export default LisaToode;
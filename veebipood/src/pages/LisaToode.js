import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import tootedFailist from "../data/tooted.json";

function LisaToode() {
  const [sonum, uuendaSonum] = useState("");
  const inputiLuger = useRef();
  const kategooriaLuger = useRef();

  const lisa = () => {
    if (inputiLuger.current.value === "") {
      uuendaSonum("Tühja nimetusega ei saa toodet lisada!");
    } else {
      uuendaSonum(
        "Toode lisatud: " + 
        inputiLuger.current.value + 
        ". Kategooria - " + 
        kategooriaLuger.current.value
      );
      tootedFailist.push(inputiLuger.current.value);
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
          <label>Toote kategooria: </label>
          <input ref={kategooriaLuger} type='text' />
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
import React, { useRef } from 'react'
import hinnadJSON from "../data/hinnad.json";
import { toast, ToastContainer } from "react-toastify";

function LisaHind() {
  const hindRef = useRef(); // import!

  const lisaHind = () => {
    if (hindRef.current.value <= 0) {
      toast.error("Negatiivset hinda lisada ei saa!");
      return;
    }

    hinnadJSON.push({
      "number": Number(hindRef.current.value), 
      "lisaja": "Mihkel"
    });
    //setHinnad(hinnad.slice());
    hindRef.current.value = "";
    toast.success("Hind edukalt lisatud!");
  }
  
  return (
    <div>
      <label>Uus hind</label>
      <input onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()} ref={hindRef} type="number" />
      <button onClick={lisaHind}>Lisa</button>
      <ToastContainer />
    </div>
  )
}

export default LisaHind
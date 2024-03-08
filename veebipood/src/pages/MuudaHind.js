import React, { useRef } from 'react'
import hinnadFailist from "../data/hinnad.json";
import { useParams } from 'react-router-dom';

function MuudaHind() {

  const { indeks } = useParams();
  const leitud = hinnadFailist[indeks];
  const hindRef = useRef();

  if (leitud === undefined) {
    return <div>Toodet ei leitud</div> // EARLY RETURN
  }

  const muuda = () => {
    hinnadFailist[indeks] = {...leitud, "number": Number(hindRef.current.value)};
  }

  return (
    <div>
        <label>Hind</label> <br />
        <input ref={hindRef} defaultValue={leitud.number} type="number" /> <br />
        <button onClick={muuda}>Muuda hind</button> <br />
    </div>
  )
}

export default MuudaHind
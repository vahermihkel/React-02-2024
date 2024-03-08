import React, { useRef } from 'react'
import tootajaFailist from '../data/tootajad.json';
import {toast, ToastContainer} from 'react-toastify';

function LisaTootaja() {

  const tootajaRef = useRef();

  const lisaTootaja = () => {
    if (tootajaRef.current.value === '') {
      toast.error('Tühja välja ei saa lisada')
      return;
    }

    tootajaFailist.push(tootajaRef.current.value)
    tootajaRef.current.value = ''
    toast.success('Töötaja edukalt lisatud')
  }

  return (
    <div>
      <h2>Töötaja lisamine</h2>
      <br />
      <div>
        <label>Töötaja nimi: </label>
        <input ref={tootajaRef}type="text" />

        <button onClick={lisaTootaja}>Sisesta</button>

        <ToastContainer/>
      </div>
    </div>
  )
}

export default LisaTootaja
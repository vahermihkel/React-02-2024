import React, { useRef } from 'react'
import esindusFailist from '../data/tallinn.json';
import {toast, ToastContainer} from 'react-toastify';

function LisaEsindus() {
  const esindusRef = useRef();

  const lisaEsindus = () => {
    if (esindusRef.current.value === '') {
      toast.error('Tühja välja ei saa lisada')
      return;
    }

    esindusFailist.push(esindusRef.current.value)
    esindusRef.current.value = ''
    toast.success('Keskus edukalt lisatud')
  }

  return (
    <div>
      <h2>Esinduse lisamine</h2>
      <br />
      <div>
        <label>Esinduse nimi: </label>
        <input ref={esindusRef}type="text" />

        <button onClick={lisaEsindus}>Sisesta</button>

        <ToastContainer/>
      </div>
    </div>
  )
}

export default LisaEsindus
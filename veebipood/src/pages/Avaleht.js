import React, { useState } from 'react'

function Avaleht() {
  const [kogus, setKogus] = useState(0); // liita, lahutada, korrutada, jagada. teen arvutusi
  // suurem/väiksem    .toFixed()
  // hinnad, kogused, kogusumma, mitu tükki
  const [sonum, setSonum] = useState(""); // isikukood, postiindeks, telefoninumber, nimi, aadress
  // .includes()    .toLowerCase()   .startsWith()    .endsWith()
  const [laigitud, setLaigitud] = useState(false); // tagurpidi keerata. 
  // aktiivne, makstud, registreerunud, sisseloginud, ostukorvis, kampaanias

  // ES6 --> array function (noolfunktsioon)
  function nulli() {
    setKogus(0);
    setSonum("Nullisid koguse!");
  }

  function vahenda() {
    setKogus(kogus - 1);
    setSonum("Vähendasid kogust!");
  }

  function suurenda() {
    setKogus(kogus + 1);
    setSonum("Suurendasid kogust!");
  }

  // KUI ma midagi kaasa saadan
  // onClick={() => fnktsMidaVäljaKutsun(KAASA_SAADETAV_SAADAV)}
  // KUI ma midagi kaasa ei saada
  // onClick={fnktsMidaVäljaKutsun}
  return (
    <div>
      {laigitud === false && <img src="/mittelaigitud.svg" alt="" />}
      {laigitud === true && <img src="/laigitud.svg" alt="" />}
      <button onClick={() => setLaigitud(!laigitud)}>Muuda like-i</button>
      <br /><br />
      <div>{sonum}</div>
      {kogus !== 0 && <button onClick={nulli}>Tagasi nulli</button>} 
      <br />
      <button disabled={kogus === 0} onClick={vahenda}>-</button>
      <span className={kogus >= 10 ? "kuldne" : undefined}>{kogus}</span>
      <button onClick={suurenda}>+</button>
    </div>
  )
}

export default Avaleht
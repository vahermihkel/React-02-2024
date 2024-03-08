import React from 'react'
import tootedFailist from "../data/tooted.json"
import { useParams } from 'react-router-dom';

function YksToode() {
  // const cars = ["Saab", "Volvo", "BMW"]; tootedFailist
  // let x = cars[1];
  const { index } = useParams();
  const leitud = tootedFailist[index];
  // "Tesla"
  //  {"nimi": "Tesla", "hind": 85000, "aktiivne": false, "pilt": "https://cdn.motor1.com/images/mgl/Mk3qg6/s3/2017-tesla-roadster-deck-model-petersen-automotive-museum.jpg"}, 

  if (leitud === undefined) {
    return <div>Toodet ei leitud</div> // EARLY RETURN
  }

  return (
    <div>
      {leitud.aktiivne === false && <div>Toode on mitteaktiivne!</div>}
      <h3>Nimi: {leitud.nimi} </h3>
      <hr />
      <div>{leitud.hind} €</div>
      <img src={leitud.pilt} alt="" />
    </div>
  )
}

export default YksToode
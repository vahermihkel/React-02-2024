import React, { useState } from "react";
import { Link } from "react-router-dom";
import tallinnaKeskused from "../data/tallinn.json";

function Esindused() {
  const [linn, muudaLinn] = useState("Tallinn");

  // Ternary operator
  // AVALDIS_MIS_TAGASTAB_TRUE/FALSE ? KUI_ON_TRUE : KUI_ON_FALSE
  // if (AVALDIS_MIS_TAGASTAB_TRUE/FALSE) {
  //   KUI_ON_TRUE
  // } else {
  //   KUI_ON_FALSE
  // }

  // Renderdamine -> HTMLi väljakuvamine
  // Re-renderdamine -> HTMLi uuendus    useState-i funktsioon setBLABLA

    //   muutuja      muutja
  const [keskused, setKeskused] = useState(tallinnaKeskused);

  const originaali = () => {
    setKeskused(tallinnaKeskused);
  }

  const sorteeriAZ = () => {
    keskused.sort((a, b) => a.localeCompare(b));
    setKeskused(keskused.slice()); // useState-i parempoolne funktsioon on HTMLi muutja
              // .slice() kustutab mälukoha
              // setKeskused -> muudab "keskused" muutujat -> saadab "keskused"
  //setKeskused([...keskused]);
  }

  const sorteeriZA = () => {
    keskused.sort((a, b) => b.localeCompare(a));
    // keskused.sort((a, b) => b.localeCompare(a, "fi"));
    setKeskused(keskused.slice());
  }

  const sorteeriTahedKasvavalt = () => {
    keskused.sort((a, b) => a.length - b.length);
    setKeskused(keskused.slice());
  }

  const sorteeriTahedKahanevalt = () => {
    keskused.sort((a, b) => b.length - a.length);
    setKeskused(keskused.slice());
  }

  const sorteeriKolmasTahtAZ = () => {                //  012
    keskused.sort((a, b) => a[2].localeCompare(b[2])); // Kristiine
    setKeskused(keskused.slice());
  }

  const filtreeriEgaLoppevad = () => {
    const vastus = keskused.filter(keskus => keskus.endsWith("e"));
    setKeskused(vastus);
  }

  const filtreeri9Tahelised = () => {
    const vastus = keskused.filter(keskus => keskus.length === 9);
    setKeskused(vastus);
  }

  const filtreeriVah7Tahelised = () => {
    const vastus = keskused.filter(keskus => keskus.length >= 7);
    setKeskused(vastus);
  }

  const filtreeriIsSisaldavad = () => {
    const vastus = keskused.filter(keskus => keskus.includes("is"));
    setKeskused(vastus);
  }

  const filtreeriKelKolmasTahtI = () => {                       //  012
    const vastus = keskused.filter(keskus => keskus[2] === "i"); // Kristiine
    setKeskused(vastus);
  }

  const kustutaEsindus = (index) => {
    keskused.splice(index, 1); // vasakpoolne mitmes, parempoolne mitu tk
    setKeskused(keskused.slice());
  }

  return (
    <div>
      <div>Esindused</div>
      <span className={linn === "Tallinn" ? "linn-aktiivne" : "linn"} onClick={() => muudaLinn("Tallinn")}>Tallinn (7)</span>
      <span className={linn === "Tartu" ? "linn-aktiivne" : "linn"} onClick={() => muudaLinn("Tartu")}>Tartu (2)</span>
      <span className={linn === "Narva" ? "linn-aktiivne" : "linn"} onClick={() => muudaLinn("Narva")}>Narva (1)</span>
      <span className={linn === "Pärnu" ? "linn-aktiivne" : "linn"} onClick={() => muudaLinn("Pärnu")}>Pärnu (1)</span>
      <br /><br />
      <div>Aktiivne linn on: {linn}</div>

      { linn === "Tallinn" &&
      <div>
        <button onClick={originaali}>Originaali</button> <br />
        <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
        <button onClick={sorteeriZA}>Sorteeri Z-A</button>
        <button onClick={sorteeriTahedKasvavalt}>Sorteeri tähtede arv kasvavalt</button>
        <button onClick={sorteeriTahedKahanevalt}>Sorteeri tähtede arv kahanevalt</button>
        <button onClick={sorteeriKolmasTahtAZ}>Sorteeri kolmas täht A-Z</button>
        <br />
        <button onClick={filtreeriEgaLoppevad}>Jäta alles 'e'ga lõppevad</button>
        <button onClick={filtreeri9Tahelised}>Jäta alles 9 tähelised</button>
        <button onClick={filtreeriVah7Tahelised}>Jäta alles vähemalt 7 tähelised</button>
        <button onClick={filtreeriIsSisaldavad}>Jäta alles kes sisaldavad 'is' lühendit</button>
        <button onClick={filtreeriKelKolmasTahtI}>Jäta alles kellel on kolmas täht 'i'</button>

{/* 
      0          1          2           3               4
["Ülemiste", "Ülemiste", "Viimsi", "Rocca al Mare", "Magistrali", "Vesse", "Kristiine", "Järveotsa"] */}

        {keskused.map((keskus, index) => 
          <div key={index}>
            {index}.{keskus}
            <button onClick={() => kustutaEsindus(index)}>x</button>
          </div>)}
      </div>}

     { linn === "Tartu" &&
      <div>
        <div>Järveotsa</div>
        <div>Raatuse</div>
      </div>}

     { linn === "Narva" &&
      <div>
        <div>Fama</div>
      </div>}

      { linn === "Pärnu" &&
       <div>
        <div>Port Artur 2</div>
      </div>}

      <Link to='/'>
        <button>Tagasi</button>
      </Link>
    </div>
  );
}

export default Esindused;
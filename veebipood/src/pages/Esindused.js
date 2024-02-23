import React, { useState } from "react";
import { Link } from "react-router-dom";

function Esindused() {
  const [linn, muudaLinn] = useState("Tallinn");

  // AVALDIS_MIS_TAGASTAB_TRUE/FALSE ? KUI_ON_TRUE : KUI_ON_FALSE
  // if (AVALDIS_MIS_TAGASTAB_TRUE/FALSE) {
  //   KUI_ON_TRUE
  // } else {
  //   KUI_ON_FALSE
  // }

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
        <div>Ülemiste</div>
        <div>Viimsi</div>
        <div>Roccal Al Mare</div>
        <div>Magistrali</div>
        <div>Vesse</div>
        <div>Kristiine</div>
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

      <Link to='/avaleht'>
        <button>Tagasi</button>
      </Link>
    </div>
  );
}

export default Esindused;
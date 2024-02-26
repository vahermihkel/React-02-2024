import React, { useState } from "react";
import { Link } from "react-router-dom";

function Kinkekaart() {
  const [hind, muudaHind] = useState(20);
  const [kogus, setKogus] = useState(1);

  return (
    <div>
      <div>Kinkekaart</div>

      <button className={hind === 20 ? "hind-aktiivne" : "hind"} onClick={() => muudaHind(20)}>20 €</button>
      <button className={hind === 50 ? "hind-aktiivne" : "hind"} onClick={() => muudaHind(50)}>50 €</button>
      <button className={hind === 100 ? "hind-aktiivne" : "hind"} onClick={() => muudaHind(100)}>100 €</button>

      <br /><br />
      <div>Kinkekaart {hind} €</div>

      <div>
        <img
          src='https://storage.googleapis.com/arvutitark-public/static/ui/gift-1.png'
          alt='kinkekaart'
        />
        <button disabled={kogus === 1} onClick={() => setKogus(kogus - 1)}>-</button>
        <span>{kogus}</span>
        <button onClick={() => setKogus(kogus + 1)}>+</button>
      </div>
      <Link to='/'>
        <button>Tagasi</button>
      </Link>
    </div>
  );
}

export default Kinkekaart;
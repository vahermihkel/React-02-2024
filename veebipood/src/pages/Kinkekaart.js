import React, { useState } from "react";
import { Link } from "react-router-dom";

function Kinkekaart() {
  const [hind, muudaHind] = useState(20);

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
        <button>-</button>
        <span>7</span>
        <button>+</button>
      </div>
      <Link to='/avaleht'>
        <button>Tagasi</button>
      </Link>
    </div>
  );
}

export default Kinkekaart;
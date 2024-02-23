import React from "react";
import { Link } from "react-router-dom";

function Ostukorv() {
  return (
    <div>
      <div>Ostukorv</div>
      <div className='ostukorv'>
        <img
          src='https://as2.ftcdn.net/v2/jpg/00/33/04/93/1000_F_33049387_PCNOkj6P1V84bB38LcoC19qshygMAYAP.jpg'
          alt='empty shopping cart'
        />
        <p>Ostukorv on hetkel tühi.</p>
      </div>
      <Link to='/avaleht'>
        <button>Tagasi</button>
      </Link>
    </div>
  );
}

export default Ostukorv;
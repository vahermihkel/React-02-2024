import React, { useState } from "react";
import { Link } from "react-router-dom";

function LisaToode() {
  const [sonum, uuendaSonum] = useState("");

  return (
    <div>
      <div>LisaToode</div>
      <div>
        <h1>The input element</h1>
        {/* <form action='#'> */}
          <label for='fname'>First name: </label>
          <input type='text' id='fname' name='fname' />
          <br /> <br />
          <label for='lname'>Last name: </label>
          <input type='text' id='lname' name='lname' />
          <br /> <br />
          <input onClick={() => uuendaSonum("Toode on valesti sisestatud!")} type='submit' value='Submit' />
        {/* </form> */}
        <p style={{color: "red", backgroundColor: "lightgray"}}>
          {sonum}
        </p>
      </div>
      <Link to='/avaleht'>
        <button>Tagasi</button>
      </Link>
    </div>
  );
}

export default LisaToode;
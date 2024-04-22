import React, { useContext, useRef, useState } from 'react'
import { AuthContext } from '../../store/AuthContext';
import { useNavigate } from 'react-router-dom';

function AuthForm(props) {
  const { setLoggedIn } = useContext(AuthContext);
  const emailRef = useRef();
  const passwordRef = useRef();
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const authKey = "AIzaSyA32kgVN79yYyVAQdVMYksjLYONHouKgIk";
  const url = "https://identitytoolkit.googleapis.com/v1/accounts:" + props.action + "?key=" + authKey;
  const repeatPasswordRef = useRef();

  const submit = () => {
    if (props.repeatPassword === true && passwordRef.current.value !== repeatPasswordRef.current.value) {
      setMessage("Paroolid ei ühti!");
      return;
    }
    const body = {
      "email": emailRef.current.value,
      "password": passwordRef.current.value,
      "returnSecureToken": true
    }
    const headers = {
      "Content-Type": "application/json"
    }

    fetch(url, {"method": "POST", "body": JSON.stringify(body), "headers": headers})
      .then(res => res.json())
      .then(json => {
        console.log(json);
        if (json.error === undefined) {
          setLoggedIn(true);
          navigate("/admin");
          sessionStorage.setItem("token", json.idToken);
        } else {
          setMessage(json.error.message);
        }
      })
  }


  return (
    <div>
      <div>{message}</div>
      <label>Email</label> <br />
      <input ref={emailRef} type="text" /> <br />
      <label>Password</label> <br />
      <input ref={passwordRef} type="password" /> <br />
      {props.repeatPassword && <>
        <label>Repeat password</label> <br />
        <input ref={repeatPasswordRef} type="password" /> <br />
      </>}
      <button onClick={submit}>{props.buttonText}</button> <br />
    </div>
  )
}

export default AuthForm
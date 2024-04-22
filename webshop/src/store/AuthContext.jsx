import React, { createContext, useState } from 'react';

// Step 1: Create a context -> impordin kus kasutusele võtan, value={{ sisu }}
export const AuthContext = createContext();
// võtan kasutusele läbi useContext hooki -> useContext(CartSumContext);

// Step 2: Create a provider component -> impordin index.js sees
// Panen ümber componentidele kus tasemel ma soovin seda contexti kasutada
export const AuthContextProvider = ({ children }) => {

  const [loggedIn, setLoggedIn] = useState(sessionStorage.getItem("token") ? true : false);

  // API päring --> saatma tokeni firebase-i ja küsima, kas on endiselt õigus olla sisse logitud

  return (
    <AuthContext.Provider value={{ loggedIn, setLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};
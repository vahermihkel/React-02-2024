import React, { createContext, useState } from 'react';
import { calculateTotal } from '../util/calculationUtil';

// Step 1: Create a context -> impordin kus kasutusele võtan, value={{ sisu }}
export const CartSumContext = createContext();
// võtan kasutusele läbi useContext hooki -> useContext(CartSumContext);

// Step 2: Create a provider component -> impordin index.js sees
// Panen ümber componentidele kus tasemel ma soovin seda contexti kasutada
export const CartSumContextProvider = ({ children }) => {
  
  const calculateInitial = () => {
    const products = JSON.parse(localStorage.getItem('cart')) || [];
    // let sum = 0;
    // products.forEach(cp => sum = sum + cp.product.price * cp.quantity)
    // return sum.toFixed(2);
    return calculateTotal(products);
  }

  const [cartSum, setCartSum] = useState(calculateInitial());

  return (
    <CartSumContext.Provider value={{ cartSum, setCartSum }}>
      {children}
    </CartSumContext.Provider>
  );
};
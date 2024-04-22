import { Button } from '@mui/material'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import styles from "../../css/HomePage.module.css"
import { toast } from 'react-toastify';
import { CartSumContext } from '../../store/CartSumContext';

function Product({product}) {

  const { cartSum, setCartSum } = useContext(CartSumContext);

  const addToCart = (addedProduct) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    //kui on ostukorvis olemas, siis suurendan kogust
    const index = cart.findIndex(cp => cp.product.id === addedProduct.id)
    if (index !== -1) { //kui ei leia siis on index -1
      cart[index].quantity = cart[index].quantity + 1

    } else {
    cart.push({"product":addedProduct, 'quantity': 1});
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));

    toast.success(`${addedProduct.title} successfully added to the cart`, {
      position: 'bottom-right'
    });

    setCartSum(+cartSum + addedProduct.price);
  }

  return (
    <div className={styles.product}>
      <img style={{ width: '100px' }} src={product.image} alt="" />
      <div>{product.title}</div>
      <div>{product.price}</div>
      <div>{product.category}</div>
      <div>{product.rating.rate}</div>
    
      <Link to={"/product/" + product.id}>
        <Button variant="outlined">See more</Button>
      </Link>
      <Button variant="contained" disabled={product.active === false} onClick={() => addToCart(product)}>Add to cart</Button>
    </div>
  )
}

export default Product
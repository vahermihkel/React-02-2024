import React, { useContext, useState } from 'react';
// import cartFromFile from '../../data/cart.json';
import "../../css/Cart.css";
// import Icon from '@mui/material/Icon';
import Grade from '@mui/icons-material/Grade';
import ParcelMachines from '../../components/cart/ParcelMachines';
import Payment from '../../components/cart/Payment';
import { CartSumContext } from '../../store/CartSumContext';
import { calculateTotal } from '../../util/calculationUtil';
// import Star from '@mui/icons-material/Star';
// import { calculateTotal } from "../../util/calculationUtil"

function Cart() {
	const [products, setProducts] = useState(JSON.parse(localStorage.getItem("cart")) || []);
  const { setCartSum } = useContext(CartSumContext);

	const removeItem = (index) => {
		products.splice(index, 1);
		setProducts(products.slice()); // HTML uuenduseks
    localStorage.setItem("cart", JSON.stringify(products)); // LS salvestuseks
    setCartSum(calculateTotal(products));
  };

  const decreaseQuantity = (index) => {
    products[index].quantity = products[index].quantity - 1;
    if (products[index].quantity === 0) {
      products.splice(index, 1);
    }
    setProducts(products.slice());
    localStorage.setItem("cart", JSON.stringify(products)); 
    setCartSum(calculateTotal(products));
  }

  const increaseQuantity = (index) => {
    products[index].quantity = products[index].quantity + 1;
    setProducts(products.slice());
    localStorage.setItem("cart", JSON.stringify(products));
    setCartSum(calculateTotal(products));
  }

	const clearCart = () => {
		products.splice(0);
		setProducts(products.slice());
    localStorage.setItem("cart", JSON.stringify(products));
    setCartSum(0);
	};

  const averageRating = () => {
    console.log("arvutan uuesti reitingut")
    let sum = 0;
    products.forEach(cp => sum = sum + cp.product.rating.rate)
    return (sum/products.length).toFixed(2);
  }

	return (
		<div>
			<div className="cart-top">
        <div>Items in cart: {products.length}</div>

        {products.length === 0 && 
        <div className='cart'>
          <p>The shopping cart ise currently empty.</p>
        </div>}

        <button onClick={clearCart}>Tühjenda</button>
      </div>

			{products.map((cp, index) => (
				<div className="product" key={index}>
          <img className="image" src={cp.product.image} alt='/' />
          <div className="title">{cp.product.title}</div>
          <div className="rate">{cp.product.rating.rate} <Grade /> </div>
          <div className="price">{cp.product.price} €</div>
          <div className="quantity">
            <img className="button" onClick={() => decreaseQuantity(index)} src="/minus.png" alt="" />
            <div>{cp.quantity} tk</div>
            <img className="button" onClick={() => increaseQuantity(index)} src="/plus.png" alt="" />
          </div>
          <div className="total">{(cp.product.price * cp.quantity).toFixed(2)} €</div>
          <img className="button" onClick={() => removeItem(index)} src="/remove.png" alt="" />
				</div>
			))}

        <div className="cart-bottom">
          {
            products.length > 0 &&
              <React.Fragment>
                <div>Sum: {calculateTotal(products)} €</div>
                <div>Average: {averageRating()} <Grade /> </div>

                <ParcelMachines />
                <Payment sum={calculateTotal(products)} />
                
              </React.Fragment>
          }
        </div>

		</div>
	);
}

export default Cart;
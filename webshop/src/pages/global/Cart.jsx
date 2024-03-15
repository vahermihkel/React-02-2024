import React, { useEffect, useState } from 'react';
// import cartFromFile from '../../data/cart.json';

function Cart() {
	const [products, setProducts] = useState(JSON.parse(localStorage.getItem("cart")) || []);
  const [parcelMachines, setParcelMachines] = useState([]);

  useEffect(() => {
    fetch("https://www.omniva.ee/locations.json")
      .then(res => res.json())
      .then(body => setParcelMachines(body))
  }, []);

	const removeItem = (index) => {
		products.splice(index, 1);
		setProducts(products.slice()); // HTML uuenduseks
    localStorage.setItem("cart", JSON.stringify(products)); // LS salvestuseks
	};

  const decreaseQuantity = (index) => {
    products[index].quantity = products[index].quantity - 1;
    if (products[index].quantity === 0) {
      products.splice(index, 1);
    }
    setProducts(products.slice());
    localStorage.setItem("cart", JSON.stringify(products)); 
  }

  const increaseQuantity = (index) => {
    products[index].quantity = products[index].quantity + 1;
    setProducts(products.slice());
    localStorage.setItem("cart", JSON.stringify(products));
  }

	const clearCart = () => {
		products.splice(0);
		setProducts(products.slice());
    localStorage.setItem("cart", JSON.stringify(products));
	};

  const calculateTotal = () => {
    let sum = 0;
    products.forEach(cp => sum = sum + cp.product.price * cp.quantity)
    return sum.toFixed(2);
  }

  const averageRating = () => {
    let sum = 0;
    products.forEach(cp => sum = sum + cp.product.rating.rate)
    return (sum/products.length).toFixed(2);
  }

	return (
		<div>
			<div>Items in cart: {products.length}</div>

      {products.length === 0 && 
      <div className='cart'>
        <p>The shopping cart ise currently empty.</p>
      </div>}

			<button onClick={clearCart}>Tühjenda</button>

			{products.map((cp, index) => (
				<div key={index}>
					<div>
						<img style={{ width: '60px' }} src={cp.product.image} alt='/' />
					</div>
					<div>
            <div>{cp.product.title}</div>
            <div>{cp.product.rating.rate} ¤</div>
            <div>{cp.product.price} €</div>
            <button onClick={() => decreaseQuantity(index)}>-</button>
            <div>{cp.quantity} tk</div>
            <button onClick={() => increaseQuantity(index)}>+</button>
            <div>{(cp.product.price * cp.quantity).toFixed(2)} €</div>
					</div>{' '}
					<button onClick={() => removeItem(index)}>Delete</button> <br />
					<br />
				</div>
			))}

    {
    products.length > 0 &&
      <React.Fragment>
        <div>Sum: {calculateTotal()} €</div>
        <div>Average: {averageRating()}</div>

        <select>
          {parcelMachines
            .filter(pm => pm.A0_NAME === "EE")
            .map(pm => <option>{pm.NAME}</option>)}
        </select>
      </React.Fragment>
    }

		</div>
	);
}

export default Cart;
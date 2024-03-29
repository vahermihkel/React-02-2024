import React, { useEffect, useState } from 'react';
// import productsFromFile from '../../data/products.json';
// import cartFile from '../../data/cart.json';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import "../../css/HomePage.css"
import { Spinner } from 'react-bootstrap';

function HomePage() {
  const [products, setProducts] = useState([]);
  const [dbProducts, setDbProducts] = useState([]);

  const [categories, setCategories] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(process.env.REACT_APP_CATEGORIES_URL)
      .then(res => res.json())
      .then(data => setCategories(data || []))

    fetch(process.env.REACT_APP_PRODUCTS_URL)
      .then(res => res.json())
      .then(data => {
        setProducts(data || []);
        setDbProducts(data || []);
        setLoading(false);
      })

  }, []);

  const sortedAZ = () => {
    products.sort((a, b) => a.title.localeCompare(b.title));
    setProducts(products.slice());
  }

  const sortedZA = () => {
    products.sort((b, a) => a.title.localeCompare(b.title));
    setProducts(products.slice());
  }

  const sortedLowToHigh = () => {
    products.sort((a, b) => a.price - b.price);
    setProducts(products.slice());
  }

  const sortedHightoLow = () => {
    products.sort((b, a) => a.price - b.price);
    setProducts(products.slice());
  }

  const sortedRatingLowtoHigh = () => {
    products.sort((a, b) => a.rating.rate - b.rating.rate);
    setProducts(products.slice());
  }

  const sortedRatingHightoLow = () => {
    products.sort((b, a) => a.rating.rate - b.rating.rate);
    setProducts(products.slice());
  }

  // const filterByStartingLetter = (startLetter) => {
  //   const result = productsFromFile.filter(product => product.title.startsWith(startLetter));
  //   setProducts(result);
  // }

  const filterByCategory = (category) => {
    const result = dbProducts.filter(product => product.category === category)
    setProducts(result)
  }

  // const filterByWomen = (category) => {
  //   const result = productsFromFile.filter(product => product.category === category)
  //   setProducts(result)
  // }

  // const filterByJewelery = (category) => {
  //   const result = productsFromFile.filter(product => product.category === category)
  //   setProducts(result)
  // }

  // const filterByElectronics = (category) => {
  //   const result = productsFromFile.filter(product => product.category === category)
  //   setProducts(result)
  // }

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
  }

  if (isLoading) {
    return <div><Spinner/> Loading...</div>
  }

  return (
    <div className='textAligin'>
      <div>
      <div>{products.length} tk</div>

      {categories.map(category => 
        <Button 
          key={category.name} 
          variant="contained" 
          onClick={() => filterByCategory(category.name)}
        >
          {category.name}
        </Button>)
      }
      
      
      
      {/* <Button variant="contained" onClick={() => filterByMen("men's clothing")}>men's clothing</Button>
      <Button variant="contained" onClick={() => filterByWomen("women's clothing")}>women's clothing</Button>
      <Button variant="contained" onClick={() => filterByJewelery("jewelery")}>jewelery</Button>
      <Button variant="contained" onClick={() => filterByElectronics("electronics")}>electronics</Button> */}
        <br />
        <Button onClick={sortedAZ}>Sorted A-Z</Button>
        <Button onClick={sortedZA}>Sorted Z-A</Button>
        <Button onClick={sortedLowToHigh}>Sorted low to high</Button>
        <Button onClick={sortedHightoLow}>Sorted high to low</Button>
        <Button onClick={sortedRatingLowtoHigh}>Sorted by rating low to high</Button>
        <Button onClick={sortedRatingHightoLow}>Sorted by rating high to low</Button>
        <br />
        {/* <button onClick={() => filterByStartingLetter('A')}>Keep products starting with A</button>
        <button onClick={() => filterByStartingLetter('B')}>Keep products starting with B</button> */}
        {/* Add more buttons here as needed */}
      </div>
      
      <div className="products">
        {products.map((product, index) => 
          <div className="home-product" key={product.id}>
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
        )}
      </div>
      <ToastContainer/>
    </div>
  );
}

export default HomePage;
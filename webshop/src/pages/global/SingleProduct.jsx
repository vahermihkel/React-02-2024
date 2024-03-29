import React, { useEffect, useState } from 'react'
// import productFile from '../../data/products.json'
import { useParams } from 'react-router-dom'

function SingleProduct() {

  const [dbProducts, setDbProducts] = useState([]);

  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(process.env.REACT_APP_PRODUCTS_URL)
      .then(res => res.json())
      .then(data => {
        setDbProducts(data || []);
        setLoading(false);
      })
  }, []);



  const {productId} = useParams();
  const found = dbProducts.find(product => product.id === Number(productId));

  if (isLoading === true) {
    return <div>Loading...</div>
  }

  if (found === undefined) {
    return <div>Product not found</div>
  }
   
  return (
    <div>
      {found.active === false && <div>Product is inactive</div>}
      <h3>Title: {found.title}</h3>
      <hr />
      <div>Price: {found.price} $</div>
      <div>Description: {found.description}</div>
      <div>Category: {found.category}</div>
      <br />
      <div>Rating: {found.rating.rate}</div>
      <div>Rating count: {found.rating.count}</div>

      <img src={found.image} alt="" />
      
    </div>
  )
}

export default SingleProduct
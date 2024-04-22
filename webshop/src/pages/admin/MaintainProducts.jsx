import React, { useEffect, useRef, useState } from 'react';
import { Spinner } from 'react-bootstrap';
// import productsFromFile from '../../data/products.json';
import { Link } from 'react-router-dom';
import styles from "../../css/MaintainProducts.module.css";

function MaintainProducts() {
  const [products, setProducts] = useState([]);
  const [dbProducts, setDbProducts] = useState([]);

  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(process.env.REACT_APP_PRODUCTS_URL)
      .then(res => res.json())
      .then(data => {
        setProducts(data || []);
        setDbProducts(data || []);
        setLoading(false);
      })
  }, []);

  // Vaatame hiljem -> kui on otsingus ja kustutame jrknr alusel
  const deleteProduct = (productId) => {
    const index = dbProducts.findIndex(product => product.id === productId);
    dbProducts.splice(index, 1);
    // setProducts(dbProducts.slice());
    searchFromProducts();
    fetch(process.env.REACT_APP_PRODUCTS_URL, {"method": "PUT", "body": JSON.stringify(dbProducts)})
  }

  // AKTIIVSUSE KASUTUSELEVÕTT -> punane vs roheline taust

  // OTSING -> kordamine checkIdUniqueness
  const searchRef = useRef();

  const searchFromProducts = () => {
    const result = dbProducts.filter(product => 
      product.title.toLowerCase().includes(searchRef.current.value.toLowerCase()) ||
      product.description.toLowerCase().includes(searchRef.current.value.toLowerCase()) ||
      product.id === Number(searchRef.current.value)
    );
    setProducts(result);
  }

  // Vaatame hiljem -> kui on otsingus ja muudame jrknr alusel
  const changeActive = (productId) => {
    const index = dbProducts.findIndex(product => product.id === productId);
    dbProducts[index].active = !dbProducts[index].active;
    //setProducts(dbProducts.slice());
    searchFromProducts();
    fetch(process.env.REACT_APP_PRODUCTS_URL, {"method": "PUT", "body": JSON.stringify(dbProducts)})
  }

  if (isLoading) {
    return <div><Spinner/> Loading...</div>
  }

  return (
<div>
  <input ref={searchRef} onChange={searchFromProducts} type="text" />
  <span>{products.length} tk</span>
  <table>
    <tbody>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Category</th>
        <th>Price</th>
        <th>Description</th>
        <th>Rating</th>
        <th>Rating count</th>
        <th>Delete</th>
      </tr>
      {products.map((product, index) => (
        <tr key={index} className={product.active ? styles.active : styles.inactive}>
          <td onClick={() => changeActive(product.id)}>{product.id}</td>
          <td onClick={() => changeActive(product.id)}>{product.title}</td>
          <td onClick={() => changeActive(product.id)}>{product.category}</td>
          <td onClick={() => changeActive(product.id)}>{product.price} €</td>
          <td onClick={() => changeActive(product.id)}>{product.description}</td>
          <td onClick={() => changeActive(product.id)}>{product.rating.rate}</td>
          <td onClick={() => changeActive(product.id)}>{product.rating.count}</td>
          <td>
            {/* <button className={styles["delete-btn"]} onClick={() => deleteProduct(product.id)}>x</button> */}
            <button className={styles.delete_btn} onClick={() => deleteProduct(product.id)}>x</button>
            <Link to={"/admin/edit-product/" + product.id}>
              <button>Muuda</button>
            </Link>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

  );
}

export default MaintainProducts;
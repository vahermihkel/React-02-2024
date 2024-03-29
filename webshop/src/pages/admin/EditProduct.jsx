import React, { useRef } from 'react';
import productsFromFile from '../../data/products.json';
import { useNavigate, useParams } from 'react-router-dom';

function EditProduct() {
  // Hooks: mingisugune erikood mis on tehtud Reactis
  // 1. Peab algama use eesliidesega
  // 2. Peab olema imporditud
  // 3. Alati sulud lõpus - see käivitatakse
  // 4. Ei tohi olla funktsiooni sees tehtud
  // 5. Ei tohi olla tingimuslikult tehtud

  const { productId } = useParams();                  // 175      === "175"
  const product = productsFromFile.find(product => product.id === Number(productId));
  // const product2 = productsFromFile.filter(product => product.id === Number(productId))[0];

  const titleRef = useRef();
  const categoryRef = useRef();
  const priceRef = useRef();
  const descriptionRef = useRef();
  const imageRef = useRef();
  const ratingRef = useRef();
  const ratingCountRef = useRef();

  const navigate = useNavigate(); 
  // const history = useHistory();     history.push()

  if (product === undefined) {
    return <div>Toodet ei leitud</div>;
  }

  const change = () => {
    const index = productsFromFile.findIndex(product => product.id === Number(productId));

    productsFromFile[index] = {
      "id": product.id,
      "title": titleRef.current.value,
      "price": Number(priceRef.current.value),
      "description": descriptionRef.current.value,
      "category": categoryRef.current.value,
      "image": imageRef.current.value,
      "rating": {
        "rate": Number(ratingRef.current.value),
        "count": Number(ratingCountRef.current.value)
      }
    };
    navigate("/admin/maintain-products");
  };

  return (
    <div className='App'>
      <label>Name</label><br />
      <input ref={titleRef} defaultValue={product.title} type="text" /><br />
      <label>Category</label><br />
      <input ref={categoryRef} defaultValue={product.category} type="text" /><br />
      <label>Price</label><br />
      <input ref={priceRef} defaultValue={product.price} type="number" /><br />
      <label>Description</label><br />
      <input ref={descriptionRef} defaultValue={product.description} type="text" /><br />
      <label>Image</label><br />
      <input ref={imageRef} defaultValue={product.image} type="text" /><br />
      <label>Rating</label><br />
      <input ref={ratingRef} defaultValue={product.rating.rate} type="number" /><br />
      <label>Rating count</label><br />
      <input ref={ratingCountRef} defaultValue={product.rating.count} type="number" /><br /><br />
      <button onClick={change} className='edit-btn'>Muuda</button>
    </div>
  );
}

export default EditProduct;
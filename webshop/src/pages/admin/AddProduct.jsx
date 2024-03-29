import React, { useEffect, useRef, useState } from 'react'
import { Spinner } from 'react-bootstrap';
import { ToastContainer} from 'react-toastify'
// import productFile from '../../data/products.json'


function AddProduct() {
  const [message, updateMessage] = useState(""); 
  const [idUnique, setIdUnique] = useState(false);

  const idRef = useRef();
  const titleRef = useRef(); 
  const priceRef = useRef();
  const imageRef = useRef(); 
  const descriptionRef = useRef();
  const categoryRef = useRef();

  const [categories, setCategories] = useState([]);

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

  useEffect(() => {
    fetch(process.env.REACT_APP_CATEGORIES_URL)
      .then(res => res.json())
      .then(data => setCategories(data || []))
  }, []);

  const addProduct = () => { 
    if (titleRef.current.value === "") { 
      updateMessage('Cannot add a product with an empty name!'); 
      return;
    }

    if (priceRef.current.value === "") { 
      updateMessage('Cannot add a product with an empty price!'); 
      return;
    }

    dbProducts.push({
        id: Number(idRef.current.value),
        title: titleRef.current.value,
        price: Number(priceRef.current.value),
        description: descriptionRef.current.value,
        category: categoryRef.current.value,
        image: imageRef.current.value,
        rating: {
          rate: 0,
          count: 0,
        },
    });
    fetch(process.env.REACT_APP_PRODUCTS_URL, {"method": "PUT", "body": JSON.stringify(dbProducts)})
  }

  const checkIdUniqueness = () => {
    const index = dbProducts.findIndex(product => product.id === Number(idRef.current.value));
    if (index === -1) { // index >= 0
      // ei leitud -> positiivne tulemus meie jaoks
      setIdUnique(true); // ---> nupp ei ole disabled
    } else {
      // leiti -> negatiivne tulemus meie jaoks
      setIdUnique(false) // ---> nupp on disabled: disabled={idUnique === false}
    }
  }

  if (isLoading) {
    return <div><Spinner/> Loading...</div>
  }
  
  return (
    <div className='textAligin'>
      <h2>Add product</h2>
      <br />
      <div>
        <label>Product ID: </label>
        <input onChange={checkIdUniqueness} ref={idRef} type='number' />
        <br /> <br />
        <label >Product title: </label>
        <input ref={titleRef} type='text' />
        <br /> <br />
        <label >Product price: </label>
        <input ref={priceRef} type="number"  />
        <br /> <br />
        <label >Product img: </label>
        <input ref={imageRef} type='text' />
        <br /><br />
        <label >Description: </label>
        <input ref={descriptionRef} type='text' />
        <br /> <br />
        <label >Category: </label>
        {/* <input  type='text' /> */}
        <select ref={categoryRef}>
          {categories.map(category => <option>{category.name}</option>)}
        </select>
        <br /> <br />
        
        <br /> <br />
        <button disabled={idUnique === false} onClick={addProduct}>Add</button>

        <p style={{ color:'red', background: 'lightgray' }}>
          {message}
        </p>

        <ToastContainer/>
      </div>
    </div>
  )
}

export default AddProduct
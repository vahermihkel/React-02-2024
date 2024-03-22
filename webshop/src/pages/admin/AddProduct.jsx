import React, { useRef, useState } from 'react'
import { ToastContainer} from 'react-toastify'
import productFile from '../../data/products.json'


function AddProduct() {
  const [message, updateMessage] = useState(""); 
  const [idUnique, setIdUnique] = useState(false);

  const idRef = useRef();
  const titleRef = useRef(); 
  const priceRef = useRef();
  const imageRef = useRef(); 
  const descriptionRef = useRef();
  const categoryRef = useRef();

  const addProduct = () => { 
    if (titleRef.current.value === "") { 
      updateMessage('Cannot add a product with an empty name!'); 
      return;
    }

    if (priceRef.current.value === "") { 
      updateMessage('Cannot add a product with an empty price!'); 
      return;
    }

    productFile.push({
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
  }

  const checkIdUniqueness = () => {
    const index = productFile.findIndex(product => product.id === Number(idRef.current.value));
    if (index === -1) { // index >= 0
      // ei leitud -> positiivne tulemus meie jaoks
      setIdUnique(true); // ---> nupp ei ole disabled
    } else {
      // leiti -> negatiivne tulemus meie jaoks
      setIdUnique(false) // ---> nupp on disabled: disabled={idUnique === false}
    }
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
        <input ref={categoryRef} type='text' />
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
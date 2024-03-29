import { Button, TextField } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react'
import { Button as BButton } from 'react-bootstrap';

function MaintainCategories() {
  const [categories, setCategories] = useState([]);
  const categoryRef = useRef();

  useEffect(() => {
    fetch(process.env.REACT_APP_CATEGORIES_URL)
      .then(res => res.json())
      .then(data => setCategories(data || []))
  }, []);

  const add = () => {
    const newCategory = {"name": categoryRef.current.value};
    categories.push(newCategory);
    setCategories(categories.slice());
    fetch(process.env.REACT_APP_CATEGORIES_URL, {"method": "PUT", "body": JSON.stringify(categories)})
  }

  const remove = (index) => {
    categories.splice(index,1);
    setCategories(categories.slice());
    fetch(process.env.REACT_APP_CATEGORIES_URL, {"method": "PUT", "body": JSON.stringify(categories)})
  }

  return (
    <div>
      <TextField label="Category" inputRef={categoryRef} /> <br />
      <Button variant="contained" onClick={add}>Sisesta</Button>
      {categories.map((category, index) => 
        <div key={index}>
          <span>{category.name}</span>
          <BButton variant="danger" onClick={() => remove(index)}>x</BButton>
        </div>)}
    </div>
  )
}

export default MaintainCategories
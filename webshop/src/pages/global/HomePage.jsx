import React, { useState } from 'react'
import productsFromFile from "../../data/products.json";
// import cartFromFile from '../../data/cart.json';

function HomePage() {
  const [products, setProducts] = useState(productsFromFile);

  // sorteerimine A-Z, Z-A, hind kasvavalt, hind kahanevalt
  // sorteerimine reitingu alusel

  // filtreerimine -> kategooria alusel

  const addToCart = (addedProduct) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const index = cart.findIndex(cp => cp.product.id === addedProduct.id)
    if (index >= 0) { // index !== -1     kui ei leia, siis on index -1
      cart[index].quantity = cart[index].quantity + 1;
      // cartFromFile[index].quantity += 1;
      // cartFromFile[index].quantity++;
      // kui on ostukorvis olemas, siis suurendan kogust
    } else {
      cart.push({"product": addedProduct, "quantity": 1});
      // kui ei ole ostukorvis olemas, siis pushin (lisan lõppu) kogusega 1
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    // lisage toast, mis ütleb toote nimetuse, mis läheb ostukorvi

    // localStorage asendab vana väärtuse localStorage.setItem() --> vana väärtus kustub
    // 1. võtma vanad väärtused -> localStorage.getItem()
    // 2. võtma jutumärgid maha -> JSON.parse()
    // 3. lisama ühe juurde (või muudan kogust) -> .push() /  [index].quantity++;
    // 4. panema jutumärgid tagasi -> JSON.stringify()
    // 5. panema localStorage-sse tagasi -> localStorage.setItem()
	};

  return (
    <div>
      <div>{products.length} tk</div>
      <button>men's clothing</button>
      <button>jewelery</button>
      <button>electronics</button>
      <button>women's clothing</button>
      {products.map(product => 
        <div key={product.id}>
          <img style={{width: "100px"}} src={product.image} alt="" />
          <div>{product.title}</div>
          <div>{product.price}</div>
          <button onClick={() => addToCart(product)}>Add To Cart</button>
        </div>
        )}
    </div>
  )
}

export default HomePage
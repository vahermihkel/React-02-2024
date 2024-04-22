import React, { useEffect, useState } from 'react';
// import productsFromFile from '../../data/products.json';
// import cartFile from '../../data/cart.json';
import { ToastContainer } from 'react-toastify';
import { Button } from '@mui/material';
import styles from "../../css/HomePage.module.css"
import { Spinner } from 'react-bootstrap';
import CarouselGallery from '../../components/home/CarouselGallery';
import SortButtons from '../../components/home/SortButtons';
import ProductComponent from '../../components/home/Product';
import Pagination from 'react-bootstrap/Pagination';
import useFetchProducts from '../../util/useFetchProducts';
import { Product } from '../../models/Product';

function HomePage() {
  // const [dbProducts, setDbProducts] = useState([]); // 20
  const [catProducts, setCatProducts] = useState<Product[]>([]); // 5
  const [products, setProducts] = useState<Product[]>([]); // 3

  const [categories, setCategories] = useState<any[]>([]);
  // const [isLoading, setLoading] = useState(true);
  const [pageNumbers, setPageNumbers] = useState<number[]>([]);
  const [activePage, setActivePage] = useState<number>(1);
  const {dbProducts, isLoading} = useFetchProducts();

  useEffect(() => {
    const url = process.env.REACT_APP_CATEGORIES_URL;
    if (url === undefined) {
      return;
    }
    fetch(url)
      .then(res => res.json())
      .then(data => setCategories(data || []))

    setCatProducts(dbProducts || []);
    setProducts(dbProducts.slice(0,3) || []);
    const totalPages = Math.ceil(dbProducts.length / 3);
    const pagesArray = [];
    for (let i = 1; i <= totalPages; i++) {
      pagesArray.push(i);
    }
    setPageNumbers(pagesArray);

  }, [dbProducts]);


  const filterByCategory = (category: string) => {
    let result;
    if (category === "all") {
      result = dbProducts;
    } else {
      result = dbProducts.filter(product => product.category === category);
    }
    setCatProducts(result); // 6
    setProducts(result.slice(0,3)); // sellest 6st esimesed 3 lähevad HTMLi

    const totalPages = Math.ceil(result.length / 3);
    const pagesArray = [];
    for (let i = 1; i <= totalPages; i++) {
      pagesArray.push(i);
    }
    setPageNumbers(pagesArray);

    setActivePage(1);
  }

  const changePage = (newPage: number) => {
    setActivePage(newPage);
    setProducts(catProducts.slice(newPage*3 - 3, newPage*3));
   // 1. leht: setProducts(0,3);
   // 2. leht: setProducts(3,6);
   // 3. leht: setProducts(6,9);
  }


  if (isLoading) {
    return <div><Spinner/> Loading...</div>
  }

  return (
    <div className='textAligin'>

      <CarouselGallery />

      <div>
      <div>Total: {dbProducts.length} tk</div>
      <div>In category: {catProducts.length} tk</div>
      <div>In page: {products.length} tk</div>

      <Button variant="contained"  onClick={() => filterByCategory("all")}>
          All
      </Button>
      {categories.map(category => 
        <Button 
          key={category.name} 
          variant="contained" 
          onClick={() => filterByCategory(category.name)}
        >
          {category.name}
        </Button>)
      }
    
        <br />
        <SortButtons
          products={products}
          setProducts={setProducts}
        />
        <br />
      </div>
      
      <Pagination>
        {pageNumbers.map(pageNumber => 
          <Pagination.Item 
            key={pageNumber} 
            onClick={() => changePage(pageNumber)} 
            active={pageNumber === activePage
          }>
            {pageNumber}
          </Pagination.Item>)}
      </Pagination>

      <div className={styles.products}>
        {products.map((product) => 
          <ProductComponent
            key={product.id}
            product={product}
          />
        )}
      </div>
      <ToastContainer/>
    </div>
  );
}

export default HomePage;
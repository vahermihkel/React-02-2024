import { useEffect, useState } from 'react'
import { Product } from '../models/Product';

function useFetchProducts() {
  const [dbProducts, setDbProducts] = useState<Product[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const url = process.env.REACT_APP_PRODUCTS_URL;
    if (url === undefined) {
      return;
    }
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setDbProducts(data || []);
        setLoading(false);
      })
  }, []);

  return {dbProducts, isLoading};
}

export default useFetchProducts
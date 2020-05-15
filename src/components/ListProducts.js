import React, { useState, useEffect } from 'react';
import Loading from './Loading';

import { getProduct } from '../services/products';
const ListProducts = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProduct() {
      const res = await getProduct();
      if (res.status === 200) {
        // console.log(res.data.resDb);
        setProducts(res.data.resDb);
        setIsLoading(false);
      }
    }
    loadProduct();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        products.map((product) => (
          <div>
            <p>{product.name}</p>
            <p>{product.description}</p>
          </div>
        ))
      )}
    </>
  );
};

export default ListProducts;

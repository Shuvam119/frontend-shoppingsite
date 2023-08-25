import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import axios from "axios";

const fetchProductData = async () => {
  const res = await axios.get("http://localhost:4000/products");
  const data = res.data;
  return data;
}

const Shop = () => {
  const [data, setData] = useState([]);

  const assignData = async () => {
    const fetchedData = await fetchProductData();
    setData(fetchedData);
  };

  useEffect(() => {
    assignData();
  }, []);
  
  return (
    <div>
      {data.map((product) => {
        return (
          <ProductCard 
            key={product._id} 
            title={product.title} 
            imgUrl={product.imgUrl} 
          /> 
        )
      })}
       
    </div>
  )
}

export default Shop
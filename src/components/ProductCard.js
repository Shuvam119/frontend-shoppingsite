import React from 'react'
import "../styles/productCard.css";

const ProductCard = ({imgUrl, title}) => {
  return (
    
      <div className="productCard">
        <img src={imgUrl}/>
        <h1>{title}</h1>
        <div className="btns">
          <button className="btn-primary">Buy Now</button>
          <button className="btn-secondary">Add to Cart</button>
        </div>
      </div>
    
  )
}

export default ProductCard;
import React from 'react';

function ProductWidget({ product }: any) {
  return (
    <div className="product-widget">
      <img 
        src={product.thumbnail} 
        alt={product.title} 
        className="product-image" 
      />
     <div className="product-details">
        <h2 className="product-title">{product.title}</h2>
        <p className="product-description">{product.description}</p>
        <p className="product-price">Price: ${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default ProductWidget;

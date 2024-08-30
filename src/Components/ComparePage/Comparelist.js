// CompareList.js
import React from 'react';
import { Button } from 'antd';
import './ComparePage.css';

const CompareList = ({ compareList, handleRemoveProduct }) => {
  return (
    <div className="comparison">
      {compareList.length === 0 && <p>No products to compare.</p>}
      {compareList.map(product => (
        <div key={product.id} className="compare-item">
          <img src={product.image || 'default-image.png'} alt="Product" className="compare-product-image" />
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <p>{product.price}</p>
          <Button
            type="danger"
            onClick={() => handleRemoveProduct(product.id)}
          >
            Remove
          </Button>
        </div>
      ))}
    </div>
  );
};

export default CompareList;

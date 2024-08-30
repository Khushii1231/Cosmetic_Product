// ComparePage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, notification } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';
import AddMoreModal from './AddMoreModal';
import CompareList from './Comparelist';
import './ComparePage.css';
import {AiFillPlusCircle} from  "react-icons/ai";
const ComparePage = () => {
  const [products, setProducts] = useState([]);
  const [compareList, setCompareList] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Fetch Products
    axios.get('https://dummyjson.com/products')
      .then(response => setProducts(response.data.products))
      .catch(error => console.error(error));
  }, []);

  useEffect(() => {
    // Retrieve Products
    if (location.state?.selectedProducts) {
      setCompareList(location.state.selectedProducts);
    }
  }, [location.state]);

  const handleAddMore = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleAddProduct = (product) => {
    if (compareList.length >= 4) {
      notification.warning({
        message: 'Compare Limit Reached',
        description: 'You can compare up to 4 products only.',
      });
      return;
    }

    if (compareList.some(p => p.id === product.id)) {
      notification.info({
        message: 'Product Already Selected',
        description: 'This product is already in your comparison list.',
      });
      return;
    }

    setCompareList([...compareList, product]);
    notification.success({
      message: 'Product Added',
      description: 'Product added to comparison list.',
    });
  };

  const handleRemoveProduct = (productId) => {
    setCompareList(compareList.filter(product => product.id !== productId));
    notification.success({
      message: 'Product Removed',
      description: 'Product removed from comparison list.',
    });
  };

  return (
    <div className="compare-page">
      <div className="add-more-icon-container">
        <AiFillPlusCircle
          onClick={handleAddMore}
          className="add-more-icon"
        />
      </div>
      {compareList.length >= 2 && (
        <Button 
          type="primary"
          onClick={() => navigate('/')}
        >
          Compare Now
        </Button>
      )}
      <AddMoreModal
        isModalVisible={isModalVisible}
        handleOk={handleOk}
        handleCancel={handleCancel}
        products={products}
        handleAddProduct={handleAddProduct}
        compareList={compareList}
      />
      <CompareList
        compareList={compareList}
        handleRemoveProduct={handleRemoveProduct}
      />
    </div>
  );
};

export default ComparePage;

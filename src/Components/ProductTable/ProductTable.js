import React, { useState, useEffect } from 'react';
import { Table, Button, notification } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './ProductTable.css';

const ProductTable = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProducts, setSelectedProducts] = useState(new Set());
  const [sortInfo, setSortInfo] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(response => {
        setProducts(response.data.products);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  const handleCompareClick = (product) => {
    if (selectedProducts.size >= 4) {
      notification.warning({
        message: 'Compare Limit Reached',
        description: 'You can compare up to 4 products only.',
      });
      navigate('/compare', { state: { selectedProducts: Array.from(selectedProducts).map(id => products.find(p => p.id === id)) } });
      return;
    }

    if (selectedProducts.has(product.id)) {
      notification.info({
        message: 'Product Already Selected',
        description: 'This product is already selected for comparison.',
      });
      return;
    }

    setSelectedProducts(prevSelected => {
      const newSelected = new Set(prevSelected);
      newSelected.add(product.id);
      return newSelected;
    });

    notification.success({
      message: 'Product Selected',
      description: 'Product added to comparison list.',
    });

    
    if (selectedProducts.size === 3) {
      navigate('/compare', { state: { selectedProducts: Array.from(selectedProducts).map(id => products.find(p => p.id === id)) } });
    }
  };

  const handleTableChange = (pagination, filters, sorter) => {
    setSortInfo(sorter);
  };

  const columns = [
    {
      title: 'Image',
      dataIndex: 'image',
      key: 'image',
      render: image => <img src={image} alt="Product" style={{ width: 50 }} />,
      sorter: false,
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      sorter: (a, b) => a.title.localeCompare(b.title),
      sortOrder: sortInfo.columnKey === 'title' && sortInfo.order,
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
      ellipsis: true,
      sorter: false,
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      sorter: (a, b) => a.price - b.price,
      sortOrder: sortInfo.columnKey === 'price' && sortInfo.order,
    },
    {
      title: 'Brand',
      dataIndex: 'brand',
      key: 'brand',
      sorter: (a, b) => (a.brand || '').localeCompare(b.brand || ''),
      sortOrder: sortInfo.columnKey === 'brand' && sortInfo.order,
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
      sorter: (a, b) => (a.category || '').localeCompare(b.category || ''),
      sortOrder: sortInfo.columnKey === 'category' && sortInfo.order,
    },
    {
      title: 'Discount',
      dataIndex: 'discountPercentage',
      key: 'discountPercentage',
      sorter: (a, b) => a.discountPercentage - b.discountPercentage,
      sortOrder: sortInfo.columnKey === 'discountPercentage' && sortInfo.order,
    },
    {
      title: 'Compare',
      key: 'compare',
      render: (_, record) => (
        <Button
          onClick={() => handleCompareClick(record)}
          disabled={selectedProducts.has(record.id)}
        >
          Compare
        </Button>
      ),
      sorter: false,
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={products}
      loading={loading}
      pagination={{ pageSize: 10 }}
      rowKey="id"
      onChange={handleTableChange}
    />
  );
};

export default ProductTable;

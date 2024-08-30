// AddMoreModal.js
import React from 'react';
import { Button, Modal, Table } from 'antd';
import { AiFillPlusCircle } from 'react-icons/ai';
import './ComparePage.css';

const AddMoreModal = ({ isModalVisible, handleOk, handleCancel, products, handleAddProduct, compareList }) => {
  const columns = [
    {
      title: 'Image',
      dataIndex: 'image',
      key: 'image',
      render: image => (
        image ? <img src={image} alt="Product" style={{ width: 50 }} /> : <span>No Image</span>
      ),
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Compare',
      key: 'compare',
      render: (_, record) => (
        <Button
          onClick={() => handleAddProduct(record)}
          disabled={compareList.some(p => p.id === record.id)}
        >
          Add to Compare
        </Button>
      ),
    },
  ];

  return (
    <Modal
      title="Add More Products"
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      width={800}
    >
      <Table
        columns={columns}
        dataSource={products}
        rowKey="id"
        pagination={{ pageSize: 10 }}
      />
    </Modal>
  );
};

export default AddMoreModal;

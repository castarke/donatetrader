import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_ITEM } from '../utils/mutations';
import CloudinaryUploadWidget from '../components/CloudinaryUploadWidget';

const AddItem = ({ ownerId }) => {
  const [itemData, setItemData] = useState({
    desc: '',
    imagePath: '',
    value: 0,
    donate: false,
    yearMade: 0,
    model: '',
    serial: '',
    categoryIds: [],
    tradeForIds: [],
  });

  const [createItem, { loading, error }] = useMutation(CREATE_ITEM);

  const handleChange = (e) => {
    setItemData({
      ...itemData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createItem({
      variables: {
        ownerId,
        ...itemData,
      },
    })
      .then((response) => {
        console.log('Item created:', response.data.createItem);
        // Perform any additional actions upon successful item creation
      })
      .catch((error) => {
        console.error('Error creating item:', error);
        // Handle error state or display error message
      });
  };

  if (loading) return <p>Creating item...</p>;
  if (error) return <p>Error creating item: {error.message}</p>;

  return (
    <div>
      <h2>Add Item</h2>
      <form onSubmit={handleSubmit}>
        <h2>Image</h2>
        <div style={{ border: '1px solid black', width: '200px', height: '200px' }}>
          <img id="itemImage" src="" alt="" />
        </div>
        <CloudinaryUploadWidget />

        <label>Description:</label>
        <input type="text" name="desc" value={itemData.desc} onChange={handleChange} />
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
};

export default AddItem;
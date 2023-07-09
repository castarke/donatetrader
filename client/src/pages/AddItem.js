import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_ITEM } from '../utils/mutations';
import CloudinaryUploadWidget from '../components/CloudinaryUploadWidget';
import { Link } from 'react-router-dom';

const AddItem = ({ ownerId }) => {
  const [itemData, setItemData] = useState({
    owner: ownerId,
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
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setItemData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createItem({
      variables: {
        ownerId,
        itemData,
      },
    })
      .then((response) => {
        console.log('Item created:', response.data.createItem);
        
      })
      .catch((error) => {
        console.error('Error creating item:', error, itemData);
      });
  };

  if (loading) return <p>Creating item...</p>;
  if (error) return <p>Error creating item: {error.message}</p>;

  const handleToggleDonate = () => {
    setItemData((prevData) => ({
      ...prevData,
      donate: true,
      value: 0,
    }));
  };

  const handleToggleTrade = () => {
    setItemData((prevData) => ({
      ...prevData,
      donate: false,
    }));
  };

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

        <label>
          Value:
          <input
            type="number"
            name="value"
            value={itemData.value}
            onChange={handleChange}
            step="0.01"
          />
        </label>

        <div>
          <label>
            <input
              type="radio"
              name="donate"
              checked={itemData.donate}
              onChange={handleToggleDonate}
            />
            Donate
          </label>
          <label>
            <input
              type="radio"
              name="donate"
              checked={!itemData.donate}
              onChange={handleToggleTrade}
            />
            Trade
          </label>
        </div>

        <label>
          Year Made:
          <input
            type="number"
            name="yearMade"
            value={itemData.yearMade}
            onChange={handleChange}
          />
        </label>

        <label>
          Model:
          <input
            type="text"
            name="model"
            value={itemData.model}
            onChange={handleChange}
          />
        </label>

        <label>
          Serial:
          <input
            type="text"
            name="serial"
            value={itemData.serial}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Add Item</button>
      </form>
      <Link to="/account">
        <button>Back to Account</button>
      </Link>
    </div>
  );
};

export default AddItem;
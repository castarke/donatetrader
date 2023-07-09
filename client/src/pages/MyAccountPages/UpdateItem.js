import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { UPDATE_ITEM } from '../../utils/mutations';
import { useParams } from 'react-router-dom';

const UpdateItemForm = () => {
  const { itemId } = useParams();

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

  const [updateItem, { loading, error }] = useMutation(UPDATE_ITEM);

  const handleChange = (e) => {
    setItemData({
      ...itemData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateItem({
      variables: {
        itemId,
        ...itemData,
      },
    })
      .then((response) => {
        console.log('Item updated:', response.data.updateItem);
      })
      .catch((error) => {
        console.error('Error updating item:', error);
      });
  };

  if (loading) return <p>Updating item...</p>;
  if (error) return <p>Error updating item: {error.message}</p>;

  return (
    <div>
      <h2>Update Item</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Description:
          <input
            type="text"
            name="desc"
            value={itemData.desc}
            onChange={handleChange}
          />
        </label>
        <label>
          Image Path:
          <input
            type="text"
            name="imagePath"
            value={itemData.imagePath}
            onChange={handleChange}
          />
        </label>
        <label>
          Value:
          <input
            type="number"
            name="value"
            value={itemData.value}
            onChange={handleChange}
          />
        </label>
        <label>
          Donate:
          <input
            type="checkbox"
            name="donate"
            checked={itemData.donate}
            onChange={handleChange}
          />
        </label>
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
        <button type="submit">Update Item</button>
      </form>
    </div>
  );
};

export default UpdateItemForm;

import React, { useState, useEffect } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { UPDATE_ITEM } from '../../utils/mutations';
import { GET_ITEM_BY_ID } from '../../utils/queries';
import { GET_ALL_CATEGORIES } from '../../utils/queries';
import CloudinaryUploadWidget from '../../components/CloudinaryUploadWidget';
import SearchCriteria from '../../components/SearchCriteria'
import RecentTrades from '../../components/RecentTrades'
import {useStyles} from '../../utils/makeStyles'

const ownerId = "64aa0287e14635b4eb7767f9"

const UpdateItemForm = () => {
  const classes = useStyles()
  const { itemId } = useParams();

  const { loading:currentItemLoading, error:currentItemError, data:currentItemData } = useQuery(GET_ITEM_BY_ID, {
    variables: { id: itemId },
  });

  const { loading:loadingCategory , error: categoryError, data:categoryData} = useQuery(GET_ALL_CATEGORIES);


  const [itemData, setItemData] = useState({
    desc: '',
    imagePath: '',
    value: 0,
    donate: false,
    yearMade: '',
    model: '',
    serial: '',
    categories: [],
    tradeFor: []
  });

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedTradeFor, setSelectedTradeFor] = useState([]);

  useEffect(() => {
    if (currentItemData) {
      const currentData = currentItemData.getItemById;
      setItemData({
        desc: currentData.desc,
        owner: currentData.owner,
        imagePath: currentData.imagePath,
        value: currentData.value,
        donate: currentData.donate,
        yearMade: currentData.yearMade,
        model: currentData.model,
        serial: currentData.serial,
        categories: currentData.categories,
        tradeFor: currentData.tradeFor,
      });
      setSelectedCategories(currentData.categories);
      setSelectedTradeFor(currentData.tradeFor);
    }
  }, [currentItemData]);

  const [updateItem, { loading, error }] = useMutation(UPDATE_ITEM);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    let newValue = type === 'checkbox' ? checked : value;

    if (name === 'categories' || name === 'tradeFor') {
      const selectedOptions = Array.from(e.target.selectedOptions);
      newValue = selectedOptions.map((option) => option.value);
    }
    setItemData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateItem({
      variables: {
        itemId,
        ...itemData,
        value:parseFloat(itemData.value),
        yearMade:parseInt(itemData.yearMade),
        owner:ownerId
      },
    })
      .then((response) => {
        console.log('Item updated:', response.data.updateItem);
      })
      .catch((error) => {
        console.error('Error updating item:', error);
      });
  };

  const handleCategoryChange = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions);
    const selectedValues = selectedOptions.map((option) => option.value);
    setSelectedCategories(selectedValues);
  };

  const handleTradeForChange = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions);
    const selectedValues = selectedOptions.map((option) => option.value);
    setSelectedTradeFor(selectedValues);
  };

  if (currentItemLoading || loadingCategory || loading) return <p>Loading item...</p>;
  if (currentItemError || categoryError || error) return <p>Error loading item: {error.message}</p>;

  const categories = categoryData.getAllCategories

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
          <img id="itemImage" src={itemData.imagePath} alt="item image" />
          <CloudinaryUploadWidget />
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
        <label>Categories</label>
        <select name="categories" onChange={handleCategoryChange} value={selectedCategories} multiple>
            {categories.map((item) =>(
              <option key={item._id} value={item._id}>{item.name}</option>
            ))}
        </select>
        <label>Want to Trade For</label>
        <select name="tradeFor" onChange={handleTradeForChange} value={selectedTradeFor} multiple>
            {categories.map((item) =>(
              <option key={item._id} value={item._id}>{item.name}</option>
            ))}
        </select>
        <button type="submit">Update Item</button>
      </form>
    </div>
  );
};

export default UpdateItemForm;
import React, { useState, useEffect, useContext } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { useParams, Link } from 'react-router-dom';
import { GET_ITEM_BY_ID, GET_ALL_CATEGORIES } from '../../utils/queries';
import { UPDATE_ITEM } from '../../utils/mutations';
import CloudinaryUploadWidget from '../../components/CloudinaryUploadWidget';
import useStyles from '../../utils/makeStyles';
import auth from '../../utils/auth';

const UpdateItemForm = () => {
  const classes = useStyles();
  const { itemId } = useParams();
  const  [user, setUser]  = useState(auth.getProfile())
  const userId = user ? user._id : null;
  const ownerId = userId;

  const { loading: currentItemLoading, error: currentItemError, data: currentItemData } = useQuery(GET_ITEM_BY_ID, {
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
    tradeFor: [],
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
        categories: currentData.categories.map((category) => category._id),
        tradeFor: currentData.tradeFor.map((category) => category._id),
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
        owner: ownerId,
        ...itemData,
        value: parseFloat(itemData.value),
        yearMade: parseInt(itemData.yearMade),
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
        <label htmlFor="desc">Description:</label>
        <input type="text" id="desc" name="desc" value={itemData.desc} onChange={handleChange} />

        <label htmlFor="imagePath">Image:</label>
        <CloudinaryUploadWidget
          onUploadSuccess={(imagePath) => setItemData((prevData) => ({ ...prevData, imagePath }))}
          onUploadFailure={(error) => console.error('Image upload failed:', error)}
        />

        <label htmlFor="value">Value:</label>
        <input type="number" id="value" name="value" value={itemData.value} onChange={handleChange} />

        <label htmlFor="donate">Donate:</label>
        <input type="checkbox" id="donate" name="donate" checked={itemData.donate} onChange={handleChange} />

        <label htmlFor="yearMade">Year Made:</label>
        <input type="text" id="yearMade" name="yearMade" value={itemData.yearMade} onChange={handleChange} />

        <label htmlFor="model">Model:</label>
        <input type="text" id="model" name="model" value={itemData.model} onChange={handleChange} />

        <label htmlFor="serial">Serial Number:</label>
        <input 
        type="text" id="serial" name="serial" value={itemData.serial} onChange={handleChange} />

        <label htmlFor="categories">Categories:</label>
        <select multiple id="categories" name="categories" value={itemData.categories} onChange={handleChange}>
          {categories.map((category) => (
            <option key={category._id} value={category._id}>
              {category.name}
            </option>
          ))}
        </select>

        <label htmlFor="tradeFor">Trade For:</label>
        <select multiple id="tradeFor" name="tradeFor" value={itemData.tradeFor} onChange={handleChange}>
          {categories.map((category) => (
            <option key={category._id} value={category._id}>
              {category.name}
            </option>
          ))}
        </select>

        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateItemForm;

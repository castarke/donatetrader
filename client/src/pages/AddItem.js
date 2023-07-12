import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import { CREATE_ITEM } from '../utils/mutations';
import { GET_ALL_CATEGORIES } from '../utils/queries';
import CloudinaryUploadWidget from '../components/CloudinaryUploadWidget';
import SearchCriteria from '../components/SearchCriteria'
import {useStyles} from '../utils/makeStyles'
import { Link } from 'react-router-dom';

const AddItem = () => {
  const { ownerId } = useParams();
  const classes = useStyles();
  const [itemData, setItemData] = useState({
    owner: ownerId,
    desc: '',
    imagePath: '',
    value: 0,
    donate: false,
    yearMade: 0,
    model: '',
    serial: '',
    categories: [],
    tradeFor: [],
  });
  
  const { loading:loadingCategory , error: categoryError, data:categoryData} = useQuery(GET_ALL_CATEGORIES);
  const [createItem, { loading, error }] = useMutation(CREATE_ITEM);

  if (loadingCategory || loading) return <p>Loading...</p>;
  if (categoryError || error) return <p>Error: {error.message}</p>;

  const categories = categoryData.getAllCategories

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
    createItem({
      variables: {
        owner: ownerId,
        desc: itemData.desc,
        imagePath: document.getElementById("itemImage").src,
        value: parseFloat(itemData.value),
        donate: itemData.donate,
        yearMade: parseInt(itemData.yearMade),
        model:itemData.model,
        serial: itemData.serial,
        categories: itemData.categories,
        tradeFor: itemData.tradeFor,
      },
    })
      .then((response) => {
        console.log('Item created:', response.data.createItem);
        console.log(itemData)
        
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
       <div className={classes.container} style={{display: 'inline'}}>
        <div className={classes.searchContainer} style={{float: 'left', width:'20%'}}>
          <SearchCriteria />
        </div>
        <div className={classes.itemsContainer} style={{float: 'left', width:'55%', margin: 'auto'}}>
          <h2 style={{paddingBottom: '10px'}}>Add Item</h2>
          <form onSubmit={handleSubmit}>
            <h2>Image</h2>
            <div>
              <div style={{ border: '1px solid black', width: '200px', height: '200px' }}>
                <img id="itemImage" src="" alt="" />
              </div>
              <CloudinaryUploadWidget />
            </div>
            <div>
              <label>Description:</label>
              <input type="text" name="desc" value={itemData.desc} onChange={handleChange} />

              <label>
                Value:
                <input type="text" name="value" value={itemData.value} onChange={handleChange}/>
              </label>

              <div>
                <label>
                  <input type="radio" name="donate" checked={itemData.donate} onChange={handleToggleDonate} />
                  Donate
                </label>
                <label>
                  <input type="radio" name="donate" checked={!itemData.donate} onChange={handleToggleTrade}/>
                  Trade
                </label>
              </div>

              <label>
                Year Made:
                <input type="text" name="yearMade" value={itemData.yearMade} onChange={handleChange}/>
              </label>

              <label>
                Model:
                <input type="text" name="model" value={itemData.model} onChange={handleChange}/>
              </label>

              <label>
                Serial:
                <input type="text" name="serial" value={itemData.serial} onChange={handleChange}/>
              </label>
              
              <label>Category</label>
              <select name="categories" onChange={handleChange}>
                <option value=""></option>
                {categories.map((item) =>(
                  <option key={item._id} value={item._id}>{item.name}</option>
                ))}
              </select>
              <label>Want to Trade For</label>
              <select name="tradeFor" onChange={handleChange}>
                <option value=""></option>
                {categories.map((item) =>(
                  <option key={item._id} value={item._id}>{item.name}</option>
                ))}
              </select>
              <button type="submit">Add Item</button>
            </div>
          </form>
        </div>
        <Link to="/account">
          <button>Back to Account</button>
        </Link>
      </div>
    </div>
  );
};

export default AddItem;
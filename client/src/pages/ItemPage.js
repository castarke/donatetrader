import React from "react";
import { useQuery } from "@apollo/client";
import { GET_ITEM_BY_ID } from "../utils/queries";
import { useParams } from 'react-router-dom';
import useStyles from '../utils/styles'
import SearchCriteria from '../components/SearchCriteria';
import RecentTrades from '../components/RecentTrades'

const ItemPage = () => {
  const { itemId } = useParams();
  const { loading, error, data } = useQuery(GET_ITEM_BY_ID, {
    variables: { id: itemId },
  });

  const classes = useStyles()

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const item = data?.getItemById;

  if (!item) return <p>No item found.</p>;

  const { _id, owner, categories, tradeFor, donate, model, serial, imagePath, desc, yearMade, dateListed } = item;
  let value = item.value

  //hide value if donated
  if (donate){
    value = "Donating"
  }else{
    value = `Value: ${value}`
  }

  return (
    <div className={classes.container}>
      <div className={classes.searchContainer}>
        <SearchCriteria />
      </div>
      <div className={classes.itemsContainer}>
        <img src={imagePath} alt="Item" />
        <p>Description: {desc}</p>
        <p>Year: {yearMade}</p>
        <p>Model: {model}</p>
        <p>Serial: {serial}</p>
        <p>Listed Date: {dateListed}</p>
        <p>Owner: {owner.name}</p>
        <p>Categories:</p>
        <ul>
          {categories.map((element) => (
            <li key={element._id}>{element.name}</li>
          ))}
        </ul>
        <p>Trading For:</p>
        <ul>
          {tradeFor.map((element) => (
            <li key={element._id}>{element.name}</li>
          ))}
        </ul>
        <p>{value}</p>
      </div>
      <div className={classes.searchContainer}>
        <RecentTrades />
      </div>
    </div>
  );
};

export default ItemPage;
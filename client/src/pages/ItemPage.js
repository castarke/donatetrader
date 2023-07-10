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

  const { _id, owner, categories, tradeFor, imagePath, desc, yearMade, dateListed } = item;

  return (
    <div className={classes.container}>
      <div className={classes.searchContainer}>
        <SearchCriteria />
      </div>
      <div className={classes.itemsContainer}>
        <img src={imagePath} alt="Item" />
        <p>Description: {desc}</p>
        <p>Year: {yearMade}</p>
        <p>Listed Date: {dateListed}</p>
      </div>
      <div className={classes.searchContainer}>
        <RecentTrades />
      </div>
    </div>
  );
};

export default ItemPage;
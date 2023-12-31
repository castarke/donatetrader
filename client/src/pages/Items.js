import React from 'react';
import { useQuery } from '@apollo/client';
const { GET_ALL_ITEMS } = require('../utils/queries');

const ItemPage = ({ itemId }) => {
  const { loading, error, data } = useQuery(GET_ALL_ITEMS, {
    variables: { itemId },
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    console.error('Error fetching item details:', error);
    return <div>Error fetching item details</div>;
  }

  const item = data?.getItemDetails;

  return (
    <div>
      <h2>{item.desc}</h2>
      {<img src={item.imagePath} alt="Item" />}
      <p>Description: {item.desc}</p>
      <p>Date Listed : {item.dateListed}</p>
      <p>Owner: {item.owner}</p>
    </div>
  );
};

export default ItemPage;

import React from "react";
import { useQuery } from "@apollo/client";
import { GET_ITEM_BY_ID } from "../utils/queries";
import { Link } from "react-router-dom";

const Item = ({ itemId }) => {
  const { loading, error, data } = useQuery(GET_ITEM_BY_ID, {
    variables: { id: itemId },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const item = data?.getItemById; // Access the 'getItemById' object from the 'data'

  if (!item) return <p>No item found.</p>;

  const { imagePath, desc, yearMade, dateListed } = item;

  return (
    <div>
      <Link to={`/item/${itemId}`}>
        <img src={imagePath} alt="Item" />
        <p>Description: {desc}</p>
        <p>Year: {yearMade}</p>
        <p>Listed Date: {dateListed}</p>
      </Link>
    </div>
  );
};

export default Item;
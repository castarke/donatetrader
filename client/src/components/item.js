import React from "react";
import { useQuery } from "@apollo/client";
import { GET_ITEM_BY_ID } from "../utils/queries";

const Item = ({ itemId }) => {
  console.log(itemId);
  const { loading, error, data } = useQuery(GET_ITEM_BY_ID, {
    variables: { id: itemId },
  });
  console.log(data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const item = data?.getItemById; // Access the 'getItemById' object from the 'data'

  if (!item) return <p>No item found.</p>;

  const { imagePath, desc, yearMade, dateListed } = item;
  console.log(imagePath);

  return (
    <div>
      <img src={imagePath} alt="Item" />
      <p>Description: {desc}</p>
      <p>Year: {yearMade}</p>
      <p>Listed Date: {dateListed}</p>
    </div>
  );
};

export default Item;
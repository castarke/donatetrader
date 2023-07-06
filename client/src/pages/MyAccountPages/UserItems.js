import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_USER_ITEMS } from './queries';

const UserItems = ({ userId }) => {
  const { loading, error, data } = useQuery(GET_USER_ITEMS, {
    variables: { userId },
  });

  if (loading) return <p>Loading user items...</p>;
  if (error) return <p>Error fetching user items: {error.message}</p>;

  const { getUserById } = data;
  const { items } = getUserById;

  return (
    <div>
      <h2>My Items</h2>
      {items.length > 0 ? (
        <ul>
          {items.map((item) => (
            <li key={item._id}>{item.desc}</li>
          ))}
        </ul>
      ) : (
        <p>No items to display</p>
      )}
    </div>
  );
};

export default UserItems;

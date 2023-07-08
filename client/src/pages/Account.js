import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ME } from '../utils/queries';
import { Link } from 'react-router-dom';

const AccountInfo = () => {
  const userId = '64a8f15973f40a5810873692';

  const { loading, error, data } = useQuery(GET_ME, {
    variables: {
      userId: userId,
    },
  });

  if (loading) return <p>Loading account information...</p>;
  if (error) return <p>Error fetching account information: {error.message}</p>;

  const { getUserById } = data;
  const { username, email, city, state, zip, items } = getUserById;

  return (
    <div>
      <h2>Account Information</h2>
      <p>Username: {username}</p>
      <p>Email: {email}</p>
      <p>City: {city}</p>
      <p>State: {state}</p>
      <p>Zip: {zip}</p>
      <p>Items:</p>
      <ul>
        {items.map((item) => (
          <li key={item._id}>
            <img src={item.imagePath} alt={item.desc} />
            <p>Description: {item.desc}</p>
            <p>Value: {item.value}</p>
            <Link to={`/update-item/${item._id}`}>
              <button>Update Item</button>
            </Link>
          </li>
        ))}
      </ul>

      <Link to="/add-item">
        <button>Add Item</button>
      </Link>
    </div>
  );
};

export default AccountInfo;

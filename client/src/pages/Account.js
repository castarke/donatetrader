import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ME } from './queries';

const AccountInfo = () => {
  const { loading, error, data } = useQuery(GET_ME);

  if (loading) return <p>Loading account information...</p>;
  if (error) return <p>Error fetching account information: {error.message}</p>;

  const { getUserById } = data;
  const { username, email, city, state, zip } = getUserById;

  return (
    <div>
      <h2>Account Information</h2>
      <p>Username: {username}</p>
      <p>Email: {email}</p>
      <p>City: {city}</p>
      <p>State: {state}</p>
      <p>Zip: {zip}</p>
    </div>
  );
};

export default AccountInfo;

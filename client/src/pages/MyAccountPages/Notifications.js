import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_NOTIFICATIONS } from './queries';

const Notifications = () => {
  const { loading, error, data } = useQuery(GET_NOTIFICATIONS);

  if (loading) return <p>Loading notifications...</p>;
  if (error) return <p>Error fetching notifications: {error.message}</p>;

  const { notifications } = data;

  return (
    <div>
      <h2>Notifications</h2>
      {notifications.length > 0 ? (
        <ul>
          {notifications.map((notification) => (
            <li key={notification.id}>{notification.message}</li>
          ))}
        </ul>
      ) : (
        <p>No notifications to display</p>
      )}
    </div>
  );
};

export default Notifications;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {useStyles} from '../utils/makeStyles';
import { Modal } from '@material-ui/core';


function DonationsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const classes = useStyles();

  return (
    <div className={classes.donationContainer}>
      <h2 className={classes.donationHeading}>Donations Page</h2>

        <div className={classes.donationModal}>
          <h2>Choose a charity to donate to:</h2>
          <button onClick={handleOpenModal}>Donate to Red Cross</button>
          <button onClick={handleOpenModal}>Donate to Salvation Army</button>
        </div>

      {isModalOpen && (
        <div className={classes.donationModal}>
          <div className={classes.donationModalContent}>
            <h2>Thank you for your donation!</h2>
            <p>The charity will be in touch with you soon.</p>
            <button onClick={handleCloseModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default DonationsPage;
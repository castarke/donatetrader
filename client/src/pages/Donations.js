import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography, Modal, Button } from "@material-ui/core";
import SearchCriteria from '../components/SearchCriteria';
import { GET_DONATIONS } from '../utils/queries';
import Item from '../components/item';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    padding: theme.spacing(2),
  },
  itemsContainer: {
    width: '50%', // Adjust the width as needed
  },
  donationContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
  },
  donationHeading: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#367588',
    textAlign: 'center',
    textShadow: '2px 2px 4px white',
  },
  donationModal: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: theme.spacing(2),
  },
  donationModalContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalCard: {
    outline: 'none',
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  donateButton: {
    backgroundColor: '#66b2b2',
    color: theme.palette.getContrastText('#66b2b2'),
    '&:hover': {
      backgroundColor: '#4c8c8c',
    },
  donatePaper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(1),
    height: '100%',
    },
  },
  buttonSpacing: {
    margin: theme.spacing(1, 1), // Adjust the horizontal spacing
    '& + &': {
      marginLeft: theme.spacing(1), // Adjust the horizontal spacing
    },
  },
}));

export default function Donations() {
  const classes = useStyles();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const { loading, error, data } = useQuery(GET_DONATIONS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const items = data.getDonations.map((item) => item._id);

  return (
    <div className={classes.container}>
      <div className={classes.searchContainer}>
        <SearchCriteria />
      </div>
      <div className={classes.itemsContainer}>
        <div className={classes.root}>
          <Grid container spacing={2}>
            {items.map((item) => (
              <Grid item xs={4} key={item}>
                <Paper className={classes.donatePaper}>
                  <Item itemId={item} />
                </Paper>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
      <div className={classes.donationContainer}>
        <Typography variant="h5" className={classes.donationHeading}>
          Donate to a Charity
        </Typography>
        <div className={classes.donationModal}>
          <Typography variant="h6">Please choose one to contribute to:</Typography>
          <Button
            variant="contained"
            className={`${classes.donateButton} ${classes.buttonSpacing}`}
            onClick={handleOpenModal}
          >
            Red Cross
          </Button>
          <Button
            variant="contained"
            className={`${classes.donateButton} ${classes.buttonSpacing}`}
            onClick={handleOpenModal}
          >
            Salvation Army
          </Button>
        </div>
        <Modal open={isModalOpen} onClose={handleCloseModal}>
          <div className={classes.modalCard}>
            <Typography variant="h6">Thank you for your donation!</Typography>
            <Typography variant="body1">
              The charity has been contacted and will be in touch with you soon.
            </Typography>
            <Button
              variant="contained"
              className={classes.donateButton}
              onClick={handleCloseModal}
            >
              Close
            </Button>
          </div>
        </Modal>
      </div>
    </div>
  );
}

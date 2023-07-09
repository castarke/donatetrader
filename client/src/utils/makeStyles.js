import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  },
  searchContainer: {
    width: '33.33%',
    marginRight: '10px',
    border: '1px solid #ccc',
    padding: '10px',
    [theme.breakpoints.down('md')]: {
      width: '100%',
      marginRight: '0',
      marginBottom: '10px',
    },
  },
  itemsContainer: {
    width: '66.66%',
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
  navlinks: {
    marginLeft: theme.spacing(5),
    display: 'flex',

  },
}));

export default useStyles
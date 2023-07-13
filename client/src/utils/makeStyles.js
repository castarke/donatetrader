// Contains all the styling for our app

import { makeStyles } from '@material-ui/core/styles';
import loginImg from './login_pic.jpg';
import signupImg from './signup_pic.jpg';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  },
  // Paper styling
  galleryPaper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2),
    height: '100%',
  },
  searchContainer: {
    width: '33.33%',
    marginRight: '10px',
    border: '1px solid #ccc',
    padding: '10px',
    [theme.breakpoints.down('md')]: {
      width: '80%',
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


  // AddItem Page Styling
  addItemsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  // searchContainer: {
  //   flexBasis: '20%',
  //   marginRight: theme.spacing(2),
  // },
  addContainer: {
    flexBasis: '55%',
    marginLeft: theme.spacing(2),
  },
  addImageContainer: {
    border: '1px solid black',
    width: '200px',
    height: '200px',
    marginBottom: theme.spacing(2),
  },
  addForm: {
    marginTop: theme.spacing(2),
  },
  addHeading: {
    paddingBottom: theme.spacing(2),
  },
  addLabel: {
    marginBottom: theme.spacing(2),
  },
  addInput: {
    width: '100%',
    marginBottom: theme.spacing(2),
    padding: theme.spacing(1),
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  donateTradeContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: theme.spacing(2),
  },
  radioLabel: {
    marginRight: theme.spacing(2),
  },
  addSelect: {
    width: '100%',
    marginBottom: theme.spacing(2),
    padding: theme.spacing(1),
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  addButton: {
    marginBottom: theme.spacing(2),
    padding: theme.spacing(1, 2),
    background: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  backToAccountButton: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(1, 2),
    background: '#2196F3',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  

  // Contact Page Styling
  contactPage: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contactContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    maxWidth: '300px',
    margin: '0 auto',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    textAlign: 'center',
  },
  contactHeading: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#367588',
    textAlign: 'center',
    textShadow: '2px 2px 4px white',
  },

  // Donation Page Styling
  donationContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    maxWidth: '300px',
    margin: '0 auto',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    textAlign: 'center',
  },
  donationModal: {
    width: '500px',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 10,
  },
  donationModalContent: {
    padding: '0 20px',
  },
  donationHeading: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#367588',
    textAlign: 'center',
    textShadow: '2px 2px 4px white',
  },

  // Landing Page Styling
  lpContainer: {
    maxWidth: 800,
    margin: '0 auto',
    padding: theme.spacing(3),
    textAlign: 'center',
  },
  lpAppBar: {
    marginBottom: theme.spacing(3),
  },
  lpLogoContainer: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
  lpLogo: {
    maxWidth: 200,
    height: 'auto',
  },
  lpAbout: {
    marginBottom: theme.spacing(3),
    fontFamily: 'Arial, sans-serif',
  },
  lpDTText: {
    color: '#66b2b2',
    fontWeight: 'bold',
  },
  lpButton: {
    margin: theme.spacing(1),
  },

  // Login Page Styling
  loginBackground: {
    backgroundImage: `url(${loginImg})`,
    backgroundSize: '50%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '80vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    maxWidth: '300px',
    margin: '0 auto',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },
  loginHeading: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#367588',
    textAlign: 'center',
    textShadow: '2px 2px 4px white',
  },
  loginImage: {
    marginRight: '20px',
    maxHeight: '50px'
  },
  loginForm: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '20px',
    borderRadius: '4px',
  },
  loginInput: {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
  },
  loginButton: {
    padding: '5px 10px',
    background: '#66b2b2',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },

  // Navbar Component Styling
  navLinks: {
    display: "flex",
    alignItems: "center",
    marginLeft: theme.spacing(5),
    padding: theme.spacing(7),
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
  navLogo: {
    flexGrow: 1,
    cursor: "pointer",
  },
  navLink: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    "&:hover, &:focus": {
      color: "#7FFFD4",
      borderBottom: "1px solid white",
    },
    "&.active": {
      color: "white",
    },
  },

  // Signup Page Styling
  signupBackground: {
    backgroundImage: `url(${signupImg})`,
    backgroundSize: '50%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '80vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  signupContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    width: '50%',
    maxWidth: '300px',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },
  signupForm: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // marginTop: '10px',
  },
  signupHeading: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#367588',
    textShadow: '2px 2px 4px white',
  },
  signupInput: {
    width: '100%',
    padding: '5px 10px',
    marginBottom: '5px',
    border: '1px solid teal',
    borderRadius: '4px',
  },
  submitButton: {
    padding: '5px 10px',
    background: '#66b2b2',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },

  // Update Item Page Styling
  // updateItemContainer: {
  //   textAlign: "center",
  //   maxWidth: "600px",
  //   margin: "0 auto",
  // },
  // updateItemHeading: {
  //   fontSize: "24px",
  //   fontWeight: "bold",
  //   color: "#367588",
  //   textShadow: "2px 2px 4px white",
  //   marginBottom: "20px",
  // },
  // updateItemForm: {
  //   display: "flex",
  //   flexDirection: "column",
  //   alignItems: "center",
  // },
  // updateItemLabel: {
  //   marginBottom: "10px",
  // },
  // updateItemInput: {
  //   width: "100%",
  //   padding: "10px",
  //   marginBottom: "10px",
  //   border: "1px solid teal",
  //   borderRadius: "4px",
  // },
  // updateItemCheckbox: {
  //   marginBottom: "10px",
  // },
  // updateItemImage: {
  //   marginBottom: "10px",
  // },
  // updateItemSelect: {
  //   width: "100%",
  //   padding: "10px",
  //   marginBottom: "10px",
  //   border: "1px solid teal",
  //   borderRadius: "4px",
  // },
  // updateItemButton: {
  //   padding: "10px 20px",
  //   background: "#4CAF50",
  //   color: "white",
  //   border: "none",
  //   borderRadius: "4px",
  //   cursor: "pointer",
  // },
}));

export { useStyles };
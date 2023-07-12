// import React, { useContext } from "react";
// import { NavLink } from "react-router-dom";
// import { AuthContext } from "../utils/auth";
// import { makeStyles } from "@material-ui/core/styles"; 

// const useStyles = makeStyles((theme) => ({
//   link: {
//     textDecoration: "none",
//     color: "white",
//     fontSize: "20px",
//     "&:hover, &:focus": {
//       color: "#7FFFD4",
//       borderBottom: "1px solid white",
//     },
//     "&.active": {
//       color: "white",
//     },
//   },
// }));

// function Logout() {
//   const classes = useStyles();
//   const authContext = useContext(AuthContext);

//   const handleLogout = () => {
//     authContext.setUser(null);
//     authContext.logout();
//   };

//   return (
//     <NavLink to="/" className={classes.link} onClick={handleLogout}>
//       Logout
//     </NavLink>
//   );
// }

// export default Logout;

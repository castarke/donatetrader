// import React, { useState } from "react";
// import {
//     Divider,
//   Drawer,
//   IconButton,
//   List,
//   ListItem,
//   ListItemText,
//   makeStyles,
// } from "@material-ui/core";
// import { Link } from "react-router-dom";

// import MenuIcon from "@material-ui/icons/Menu";

// const useStyles = makeStyles(()=>({
//     link:{
//         textDecoration:"none",
//         color: "blue",
//         fontSize: "20px",
//     },
//     icon:{
//         color: "white"
//     }
// }));

// function DrawerComponent() {
//     const classes = useStyles();
//   const [openDrawer, setOpenDrawer] = useState(false);
//   return (
//     <>
//       <Drawer
//         open={openDrawer}
//         onClose={() => setOpenDrawer(false)}
//       >
//         <List>
//         <ListItem onClick={() => setOpenDrawer(false)}>
//             <ListItemText>
//               <Link to="/" className={classes.link}>Home</Link>
//             </ListItemText>
//           </ListItem>
//           <Divider/>
//           <ListItem onClick={() => setOpenDrawer(false)}>
//             <ListItemText>
//               <Link to="/about" className={classes.link}>About</Link>
//             </ListItemText>
//           </ListItem>
//           <Divider/>
//           <ListItem onClick={() => setOpenDrawer(false)}>
//             <ListItemText>
//               <Link to="/contact" className={classes.link}>Contact</Link>
//             </ListItemText>
//           </ListItem>
//           <Divider/>
//           <ListItem onClick={() => setOpenDrawer(false)}>
//             <ListItemText>
//               <Link to="/about" className={classes.link}>Faq</Link>
//             </ListItemText>
//           </ListItem>
//           <Divider/>
//         </List>
//       </Drawer>
//       <IconButton onClick={() => setOpenDrawer(!openDrawer)}className={classes.icon}>
//         <MenuIcon />
//       </IconButton>
//     </>
//   );
// }
// export default DrawerComponent;

import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  IconButton,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles(() => ({
  link: {
    textDecoration: "none",
    color: "blue",
    fontSize: "20px",
  },
  icon: {
    color: "white",
  },
  listItemText: {
    color: "blue",
  },
}));

function DrawerComponent({ links }) {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List>
          {links.map((link, index) => (
            <ListItem
              button
              key={index}
              onClick={() => setOpenDrawer(false)}
            >
              <ListItemText
                primary={link.props.children}
                classes={{ primary: classes.listItemText }}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <IconButton
        onClick={() => setOpenDrawer(!openDrawer)}
        className={classes.icon}
      >
        <MenuIcon />
      </IconButton>
    </>
  );
}

export default DrawerComponent;


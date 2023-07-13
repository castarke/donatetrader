import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  IconButton,
} from "@material-ui/core";
import { NavLink } from "react-router-dom";
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
    color: "#008B8B",
  },
}));

function DrawerComponent({ links, handleLogout }) {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleCloseDrawer = (event) => {
    if (event.target.tagName !== "BUTTON") {
      setOpenDrawer(false);
    }
  };

  return (
    <>
      <Drawer open={openDrawer} onClose={handleCloseDrawer}>
        <List>
          {links.map((link, index) => (
            <ListItem
              button
              key={index}
              onClick={() => setOpenDrawer(false)}
              component={NavLink}
              to={link.props.to}
              exact
            >
              <ListItemText
                primary={link.props.children}
                classes={{ primary: classes.listItemText }}
              />
            </ListItem>
          ))}
          {handleLogout && (
            <ListItem
              button
              onClick={handleLogout}
              component={NavLink}
              to="/logout"
              exact
            >
              <ListItemText
                primary="Logout"
                classes={{ primary: classes.listItemText }}
              />
            </ListItem>
          )}
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

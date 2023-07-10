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
    color: "#008B8B",
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
              component={Link}
              to={link.props.to}
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

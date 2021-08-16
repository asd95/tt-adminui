import React, { Fragment } from "react";
import { makeStyles, Drawer, Typography } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import SpeedIcon from "@material-ui/icons/Speed";
import SupportIcon from "@material-ui/icons/Support";
import { useHistory, useLocation } from "react-router";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => {
  return {
    drawer: {
      width: drawerWidth,
    },
    drawerPaper: {
      width: drawerWidth,
      top: "auto",
      boxShadow: "2px 0px 6px -1px rgba(0,0,0,0.5)",
    },
    active: {
      backgroundColor: "#f1f1f1",
      color: theme.palette.secondary.main,
    },
  };
});

const getUrl = (location) => {
  let url = location.pathname.split("/").pop();
  return url ? url : "chart";
};

const AppSidebar = () => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const url = getUrl(location);
  const menuItems = [
    {
      text: "Dashboard",
      icon: <SpeedIcon color="inherit" />,
      path: `/dashboard/${url}`,
    },
    {
      text: "Suport",
      icon: <SupportIcon color="inherit" />,
      path: "/suport/",
    },
  ];

  return (
    <Fragment>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{ paper: classes.drawerPaper }}
      >
        {/* list / links */}
        <List>
          {menuItems.map((item) => (
            <ListItem
              key={item.text}
              button
              onClick={() => history.push(item.path)}
              className={
                location.pathname === item.path ? classes.active : null
              }
            >
              <ListItemIcon style={{ color: "inherit" }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText
                disableTypography
                primary={
                  <Typography variant="subtitle2" style={{ fontWeight: "500" }}>
                    {item.text}
                  </Typography>
                }
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Fragment>
  );
};

export default AppSidebar;

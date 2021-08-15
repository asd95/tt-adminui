import React from "react";
import AppSideBar from "./AppSidebar";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      display: "flex",
    },
  };
});

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppSideBar />
      <div>{children}</div>
    </div>
  );
};

export default Layout;

import React from "react";
import AppSideBar from "./AppSidebar";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => {
  return {
    root: {
      display: "flex",
    },
    pages: {
      flex: 1,
    },
  };
});

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppSideBar />
      <div className={classes.pages}>{children}</div>
    </div>
  );
};

export default Layout;

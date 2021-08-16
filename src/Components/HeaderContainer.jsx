import React from "react";
import {makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      backgroundColor: theme.palette.secondary.main,
      color: "#fff",
      borderBottom: `1px solid rgba(0, 0, 0, 0.1)`,
      padding: '0 1em'
    },
  };
});

const HeaderContainer = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.root}>{children}</div>;
};

export default HeaderContainer;

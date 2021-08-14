import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import DonutSmallIcon from "@material-ui/icons/DonutSmall";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  icon: {
      fontSize: 36
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: "#1b5e20",
    minHeight: "100%",
  },
  btn: {
      textTransform: 'capitalize'
  }
}));

const AppNavbar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" elevation={0}>
        <Toolbar className={classes.appBar}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <DonutSmallIcon className={classes.icon} />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Page title
          </Typography>
          <Button color="inherit" className={classes.btn}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default AppNavbar;

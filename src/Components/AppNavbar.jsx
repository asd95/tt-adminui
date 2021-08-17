import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import DonutSmallIcon from "@material-ui/icons/DonutSmall";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: 'sticky',
    top: 0,
    zIndex: 100
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  icon: {
    fontSize: 36,
  },
  title: {
    flexGrow: 1,
  },
  toolBar: {
    minHeight: "100%",
  },
  btn: {
    textTransform: "capitalize",
  },
}));

const AppNavbar = () => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <div className={classes.root}>
      <AppBar position="static" elevation={0}>
        <Toolbar className={classes.toolBar}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={()=> history.push('/dashboard/chart')}
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

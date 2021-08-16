import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    backgroundColor: "inherit",
    boxShadow: "none",
    color: "#fff",
  },
  color: {
    backgroundColor: "#fff",
  },
});

const DashboardNavbar = () => {
  const classes = useStyles();
  const history = useHistory();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const menuItems = [
    {
      text: "Chart",
      path: "/dashboard/chart",
    },
    {
      text: "Report",
      path: "/dashboard/report",
    },
  ];

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="inherit"
        TabIndicatorProps={{ style: { background: "#fff" } }}
      >
        {menuItems.map((item) => {
          return (
            <Tab
              key={item.text}
              label={item.text}
              onClick={() => history.push(item.path)}
            />
          );
        })}
      </Tabs>
    </Paper>
  );
};

export default DashboardNavbar;

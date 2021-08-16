import React, { Fragment } from "react";
import { Typography, makeStyles } from "@material-ui/core";
import HeaderContainer from "../Components/HeaderContainer";
import DashboardNavbar from "../Components/DashboardNavbar";
import { Switch, Route } from "react-router";
import Chart from "../Pages/Chart";
import Report from "../Pages/Report";

const useStyles = makeStyles((theme) => {
  return {
    title: {
      padding: "14px 0px",
    },
  };
});

const Dashboard = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <HeaderContainer>
        <Typography variant="h6" component="h1" className={classes.title}>
          Dashboard
        </Typography>
      </HeaderContainer>
      <HeaderContainer>
        <DashboardNavbar />
      </HeaderContainer>
      <div>
        <Switch>
          <Route path="/dashboard/chart">
            <Chart />
          </Route>
          <Route path="/dashboard/report">
            <Report />
          </Route>
        </Switch>
      </div>
    </Fragment>
  );
};

export default Dashboard;

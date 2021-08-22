import React, { Fragment } from "react";
import { Typography, makeStyles } from "@material-ui/core";
import HeaderContainer from "../Components/HeaderContainer";
import DashboardNavbar from "../Components/DashboardNavbar";
import { Switch, Route, Redirect } from "react-router-dom";
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
          <Route exact path="/dashboard/chart">
            <Chart />
          </Route>
          <Route exact path="/dashboard/report">
            <Report />
          </Route>
          <Redirect to="/dashboard/chart" />
        </Switch>
      </div>
    </Fragment>
  );
};

export default Dashboard;

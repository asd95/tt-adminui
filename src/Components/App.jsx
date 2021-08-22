import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import AppNavbar from "./AppNavbar";
import Layout from "./Layout";
import Dashboard from "../Pages/Dashboard";
import Suport from "../Pages/Suport";

const App = () => {
  return (
    <div>
      <AppNavbar />
      <Layout>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/dashboard/chart"/>} />
          <Route path="/dashboard/:page?" component={Dashboard} />
          <Route exact path="/suport" component={Suport} />
          <Redirect to="/dashboard/chart"/>
        </Switch>
      </Layout>
    </div>
  );
};

export default App;

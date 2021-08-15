import React from 'react';
import {Route, Switch} from 'react-router-dom';
import AppNavbar from './AppNavbar';
import Layout from './Layout';
import Dashboard from '../Pages/Dashboard';
import Suport from '../Pages/Suport';
const App = () => {
  return (
    <div>
    <AppNavbar/>
    <Layout>
      <Switch>
        <Route path="/" exact component={Dashboard}/>
        <Route path="/suport" component={Suport}/>
      </Switch>
    </Layout>
    </div>
  );
}

export default App;

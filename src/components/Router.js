import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App.js';
import DetailsView from './DetailsView.js';
import NotFound from './NotFound.js';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/sauce/:id"  component={DetailsView} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default Router;




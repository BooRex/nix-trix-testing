import React from 'react';
import { ROUTE } from '../../../constants/routes';
import { Route, Switch } from 'react-router-dom';
import Page from '../Page';
import HomePage from '../../features/Home/HomePage';

export default () => (
  <Page>
    <Switch>
      <Route exact path={ ROUTE.HOME_PAGE } component={ HomePage }/>
    </Switch>
  </Page>
);

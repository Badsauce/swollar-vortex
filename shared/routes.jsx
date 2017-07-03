import React     from 'react';
import { Route } from 'react-router';
import App from 'components';
import HomePage from 'components/HomePage'

export default (
  <App>
    <Route path="/" component={HomePage} />
  </ App>
);

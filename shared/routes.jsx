import React     from 'react';
import { Route } from 'react-router';
import App from 'components';
import HomePage from 'components/HomePage'
import ListEditorPage from 'components/ListEditorPage'

export default (
  <App>
    <Route exact path="/" component={HomePage} />
    <Route path="/editList/:listId/:partnerId" component={ListEditorPage} />
  </ App>
);

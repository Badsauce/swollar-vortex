import React     from 'react';
import { Route } from 'react-router';
import App from 'components';
import HomePage from 'components/HomePage'
import ListEditorPage from 'components/ListEditorPage'
import MatchedListPage from 'components/MatchedListPage'

export default (
  <App>
    <Route exact path="/" component={HomePage} />
    <Route path="/editList/:coupleId/:partnerId" component={ListEditorPage} />
    <Route path="/matchedList/:coupleId" component={MatchedListPage} />
  </ App>
);

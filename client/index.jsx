import React from 'react';
import { render }  from 'react-dom';
import { BrowserRouter }  from 'react-router-dom';
import routes from 'routes';
import App from 'components';

render((
  <BrowserRouter>
    {routes}
  </ BrowserRouter>
), document.getElementById('react-view'));

import express                   from 'express';
import React                     from 'react';
import { renderToString }        from 'react-dom/server'
import { StaticRouter }          from 'react-router';
import routes                    from 'routes';

const app = express();
app.get('*', (req, res) => {
    const context = {};

    const InitialComponent = (
      <StaticRouter
        location={req.url}
        context={context}
      >
        {routes}
      </StaticRouter>
    );

    const componentHTML = renderToString(InitialComponent);
    const HTML = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Isomorphic Redux Demo</title>
      </head>
      <body>
        <div id="react-view">${componentHTML}</div>
        <script type="application/javascript" src="/bundle.js"></script>
      </body>
  </html>
`
    res.end(HTML);
});
export default app;

import "@babel/polyfill";
import express from "express";
import bodyParser from "body-parser";
import React from "react";
import * as ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import App from "./src/app";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static("build"));

app.get("*", (req, res) => {
  const context = {};
  const content = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  );
  const html = `
  <html>
    <head>
    </head>
    <body>
      <div id="root">
        ${content}
      </div>
    </body>
  </html>
  `;
  res.send(html);
});

app.listen(PORT, () => {
  console.log(`App running on ${PORT}`);
});

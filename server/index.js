import "babel-polyfill";
import express from "express";
import { matchRoutes } from "react-router-config";
import proxy from "express-http-proxy";
import Routes from "../app/Routes";
import renderer from "./helpers/renderer";
import createStore from "./helpers/createStore";
import data from "./data";

const PORT = 3333;
const app = express();

app.use(express.static("public"));

app.get("/api/vacancies", (req, res) => {
  res.send(data);
});

app.get("/api/vacancies/:id", (req, res) => {
  res.send(data[req.params.id - 1]);
});

app.get("*", (req, res) => {
  const store = createStore(req);

  const promises = matchRoutes(Routes, req.path)
    .map(({ route }) => {
      return route.loadData ? route.loadData(store) : null;
    })
    .map(promise => {
      if (promise) {
        return new Promise((resolve, reject) => {
          promise.then(resolve).catch(resolve);
        });
      }
    });

  Promise.all(promises).then(() => {
    const context = {};
    const content = renderer(req, store, context);

    if (context.url) {
      return res.redirect(301, context.url);
    }
    if (context.notFound) {
      res.status(404);
    }

    res.send(content);
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

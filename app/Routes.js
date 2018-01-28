import React from "react";
import App from "./App";
import HomePage from "./pages/HomePage";
import VacanciesListPage from "./pages/VacanciesListPage";
import VacanciesItemPage from "./pages/VacanciesItemPage";
import NotFoundPage from "./pages/NotFoundPage";

export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: "/",
        exact: true
      },
      {
        ...VacanciesListPage,
        path: "/vacancies",
        exact: true
      },
      {
        ...VacanciesItemPage,
        path: "/vacancies/:id"
      },
      {
        ...NotFoundPage
      }
    ]
  }
];

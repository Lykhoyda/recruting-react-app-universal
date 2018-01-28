import React from "react";
import { renderRoutes } from "react-router-config";
import Header from "./components/Header";
import Reboot from "material-ui/Reboot";

const App = ({ route }) => {
  return (
    <div>
      <Reboot />
      <Header />
      {renderRoutes(route.routes)}
    </div>
  );
};

export default {
  component: App
};

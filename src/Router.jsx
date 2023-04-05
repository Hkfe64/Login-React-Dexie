import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import App from "./App";
import Login from "./pages/Login";

const Dashboard = lazy(() => import("./pages/Dashboard"));

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Login />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

export default Router;

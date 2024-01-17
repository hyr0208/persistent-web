import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import MainPage from "../pages/main/MainPage";

function Router() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route element={<MainPage />}></Route>
      </Route>
    </Routes>
  );
}

export default Router;

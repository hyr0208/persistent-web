import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import MainPage from "../pages/main/MainPage";
import BrandIntroduction from "../pages/company/BrandIntroduction";

function Router() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<MainPage />}></Route>
        <Route
          path="/brandintroduction"
          element={<BrandIntroduction />}
        ></Route>
      </Route>
    </Routes>
  );
}

export default Router;

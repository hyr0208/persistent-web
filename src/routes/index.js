import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import BrandIntroduction from "../pages/brand/BrandIntroduction";
import CompanyIntroduction from "../pages/\bcompany/\bCompanyIntroduction";

function Router() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<CompanyIntroduction />}></Route>
        <Route
          path="/brandintroduction"
          element={<BrandIntroduction />}
        ></Route>
      </Route>
    </Routes>
  );
}

export default Router;

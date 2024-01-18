import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import MainPage from "../pages/main/MainPage";
import CompanyIntroduction from "../pages/company/CompanyIntroduction";

function Router() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<MainPage />}></Route>
        <Route
          path="/companyintroduction"
          element={<CompanyIntroduction />}
        ></Route>
      </Route>
    </Routes>
  );
}

export default Router;

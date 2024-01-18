import React, { Fragment } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

function Layout() {
  return (
    <Fragment>
      <Header />
      <main className="mt-[88px] min-h-[calc(100vh-88px-100px)]">
        <div>
          <Outlet />
        </div>
      </main>
      <Footer />
    </Fragment>
  );
}

export default Layout;

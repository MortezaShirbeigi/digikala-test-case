import React from "react";
import Footer from "../footer";
import Header from "../header";

function Layout(props) {
  return (
    <div>
      <Header />
      <main className="min-vh100 mt-100">{props.children}</main>
      <Footer />
    </div>
  );
}

export default Layout;

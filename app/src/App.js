import React from "react";
import AppFooter from "./components/Layout/AppFooter/AppFooter";
import AppHeader from "./components/Layout/AppHeader/AppHeader";
import AppMain from "./components/AppMain/AppMain";
import PageHeader from "./components/PageHeader/PageHeader";
import BeachDetailHeader from "./components/BeachDetailHeader/BeachDetailHeader";
import Divider from "./components/Divider/Divider";

import beachOne from "../src/assets/beach-01.jpg";

export default function App() {
  return (
    <div className="app">
      <div className="container">
        <AppHeader />

        <AppMain>
          <PageHeader />
          <BeachDetailHeader
            alt="beach name"
            image={beachOne}
            addressLine1="8700 Potomac Hills Street"
            addressLine2="Great Falls, Virginia"
            phoneLine1="703-759-9018"
            phoneLine2="TTY 711"
          />

          <Divider />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </AppMain>

        <AppFooter />
      </div>
    </div>
  );
}

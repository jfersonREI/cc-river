import React from "react";
import AppFooter from "./components/Layout/AppFooter/AppFooter";
import AppHeader from "./components/Layout/AppHeader/AppHeader";
import AppMain from "./components/AppMain/AppMain";
import CaseReviewHeader from "./components/PageHeader/PageHeader";
import CaseReviewOverview from "./components/CaseReviewOverview/CaseReviewOverview";
import BeachDetailHeader from "./components/BeachDetailHeader/BeachDetailHeader";

import beachOne from "../src/assets/beach-01.jpg";

export default function App() {
  return (
    <div className="app">
      <div className="container">
        <AppHeader />

        <AppMain>
          <CaseReviewHeader />
          <BeachDetailHeader alt="beach name" image={beachOne} />

          <CaseReviewOverview />
        </AppMain>

        <AppFooter />
      </div>
    </div>
  );
}

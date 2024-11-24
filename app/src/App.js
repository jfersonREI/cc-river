import React from "react";
import AppFooter from "./components/Layout/AppFooter/AppFooter";
import AppHeader from "./components/Layout/AppHeader/AppHeader";
import AppMain from "./components/AppMain/AppMain";
import CaseReviewHeader from "./components/PageHeader/PageHeader";
import CaseReviewOverview from "./components/CaseReviewOverview/CaseReviewOverview";

import Divider from "./components/Divider/Divider";

import { FormGroup, Label, Select, Textarea } from "@trussworks/react-uswds";

export default function App() {
  return (
    <div className="app">
      <div className="container">
        <AppHeader />

        <AppMain>
          <CaseReviewHeader />
          <CaseReviewOverview />
        </AppMain>

        <AppFooter />
      </div>
    </div>
  );
}

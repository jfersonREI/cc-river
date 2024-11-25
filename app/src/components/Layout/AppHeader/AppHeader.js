import React from "react";
import { useState } from "react";
import { ReactComponent as HeaderLogoImage } from "../../../assets/river-header-logo.svg";
import "./AppHeader.scss";

import {
  Header,
  PrimaryNav,
  NavMenuButton,
  Search,
} from "@trussworks/react-uswds";

const mockSubmit = (): void => {
  /* mock submit fn */
};

function AppHeader() {
  const [expanded, setExpanded] = useState(false);
  const onClick = (): void => setExpanded((prvExpanded) => !prvExpanded);

  const testItemsMenu = [
    <a href="#two" key="two" className="usa-nav__link">
      <span>Find a beach</span>
    </a>,
    <a href="#three" key="three" className="usa-nav__link">
      <span>Make Reservation</span>
    </a>,
    <a href="#three" key="three" className="usa-nav__link">
      <span>Cancel Reservation</span>
    </a>,
  ];

  return (
    <>
      <div className="app-header">
        <div className="grid-container">
          <div className="app-header__container">
            <div className="app-header__logo">
              <a href="/" className="app-header__logo-link">
                <HeaderLogoImage className="app-header__logo-image" />
              </a>
            </div>

            <Header basic={true} showMobileOverlay={expanded}>
              <div className="usa-nav-containers">
                <div className="usa-navbar">
                  <NavMenuButton onClick={onClick} label="Menu" />
                </div>
                <PrimaryNav
                  items={testItemsMenu}
                  mobileExpanded={expanded}
                  onToggleMobileNav={onClick}
                >
                  <Search size="small" onSubmit={mockSubmit} />
                </PrimaryNav>
              </div>
            </Header>
          </div>
        </div>
      </div>
    </>
  );
}

export default AppHeader;

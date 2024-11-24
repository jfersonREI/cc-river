import React from "react";
import { ReactComponent as FooterLogoImage } from "../../../assets/river-footer-logo.svg";
import "./AppFooter.scss";
import {
  Footer,
  Grid,
  GridContainer,
  Logo,
  SocialLinks,
  SocialLink,
} from "@trussworks/react-uswds";

export default function App() {
  const returnToTop = (
    <GridContainer className="usa-footer__return-to-top">
      <a href="/">Return to top</a>
    </GridContainer>
  );
  const socialLinkItems = [
    <SocialLink
      key="facebook"
      name="Facebook"
      href="https://www.facebook.com/uscis"
    />,
    <SocialLink
      key="twitter"
      name="Twitter"
      href="https://www.twitter.com/uscis"
    />,
    <SocialLink
      key="youtube"
      name="YouTube"
      href="https://www.youtube.com/uscis"
    />,
    <SocialLink
      key="instagram"
      name="Instagram"
      href="#https://www.instagram.com/uscis"
    />,
  ];

  const footerSecondary = (
    <>
      <Grid row gap>
        <Logo
          size="medium"
          image={
            <FooterLogoImage
              className="usa-footer__logo-img"
              aria-label="USCIS"
            />
          }
        />
        <Grid
          className="usa-footer__contact-links"
          mobileLg={{
            col: 6,
          }}
        >
          <SocialLinks links={socialLinkItems} />
          <p className="usa-footer__contact-heading">Parks & Recreation</p>

          <address className="usa-footer__address">
            <div className="usa-footer__contact-info grid-row grid-gap">
              <div className="grid-col-auto">
                <a href="tel:1-800-555-5555">(800) CALL-PARK</a>
              </div>
              <div className="grid-col-auto">
                <a href="mailto:info@parksandrec.gov">info@parksandrec.gov</a>
              </div>
            </div>
          </address>
        </Grid>
      </Grid>
    </>
  );

  return (
    <>
      <Footer returnToTop={returnToTop} secondary={footerSecondary} />
    </>
  );
}

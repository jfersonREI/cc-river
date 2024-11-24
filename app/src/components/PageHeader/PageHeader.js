import "./PageHeader.scss";

import {
  BreadcrumbBar,
  Breadcrumb,
  BreadcrumbLink,
} from "@trussworks/react-uswds";

function PageHeader() {
  function sayClick() {
    alert("Click!");
  }
  return (
    <div className="page-header">
      <BreadcrumbBar>
        <Breadcrumb>
          <BreadcrumbLink href="#">
            <span>Home</span>
          </BreadcrumbLink>
        </Breadcrumb>

        <Breadcrumb current>
          <span>Find a beach</span>
        </Breadcrumb>
      </BreadcrumbBar>
      <div className="page-header__details">
        <div className="page-header__title">Find a beach</div>
      </div>
    </div>
  );
}

export default PageHeader;

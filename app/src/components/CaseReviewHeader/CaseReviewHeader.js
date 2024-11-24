import "./CaseReviewHeader.scss";

import { Button } from "@trussworks/react-uswds";

function CaseReviewHeader() {
  function sayClick() {
    alert("Click!");
  }
  return (
    <div className="case-review-header">
      <div className="case-review-header__details">
        <div className="case-review-header__title">Find a beach</div>
      </div>
    </div>
  );
}

export default CaseReviewHeader;

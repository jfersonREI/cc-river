import "./CaseReviewOverview.scss";

function CaseReviewOverview() {
  return (
    <div className="case-review-overview">
      <div className="case-review-overview__col">
        <div className="case-review-overview__info-block">
          <span className="case-review-overview__info-label">Petitioner:</span>
          <span className="case-review-overview__info-value">
            Allen, Darwin Belen
          </span>
        </div>
        <div className="case-review-overview__info-block">
          <span className="case-review-overview__info-label">SSN:</span>
          <span className="case-review-overview__info-value">444331111</span>
        </div>
      </div>

      <div className="case-review-overview__col">
        <div className="case-review-overview__info-block">
          <span className="case-review-overview__info-label">Case state:</span>
          <span className="case-review-overview__info-value">
            Ready for case review
          </span>
        </div>
        <div className="case-review-overview__info-block">
          <span className="case-review-overview__info-label">
            Service center:
          </span>
          <span className="case-review-overview__info-value">
            (WSC) California service center
          </span>
        </div>
        <div className="case-review-overview__info-block">
          <span className="case-review-overview__info-label">
            Receipt date:
          </span>
          <span className="case-review-overview__info-value">03/20/2018</span>
        </div>
      </div>

      <div className="case-review-overview__col">
        <div className="case-review-overview__info-block">
          <span className="case-review-overview__info-label">TLC number:</span>
          <span className="case-review-overview__info-value">
            1123-12345-123456
          </span>
        </div>
        <div className="case-review-overview__info-block">
          <span className="case-review-overview__info-label">
            Total number of workers::
          </span>
          <span className="case-review-overview__info-value">10</span>
        </div>
      </div>
    </div>
  );
}

export default CaseReviewOverview;

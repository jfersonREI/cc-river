import "./CaseExpandSectionHeader.scss";

function CaseExpandSectionHeader(props) {
  return (
    <div className="case-expand-section-header">
      <span className="case-expand-section-header__label">{props.label}</span>
    </div>
  );
}

export default CaseExpandSectionHeader;

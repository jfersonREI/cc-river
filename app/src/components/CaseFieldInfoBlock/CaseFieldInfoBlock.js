import "./CaseFieldInfoBlock.scss";

function CaseFieldInfoBlock(props) {
  return (
    <div className="case-field-info-block">
      <span className="case-field-info-block__label">{props.label}</span>
      <span className="case-field-info-block__value">{props.value}</span>
    </div>
  );
}

export default CaseFieldInfoBlock;

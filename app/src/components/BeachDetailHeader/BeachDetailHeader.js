import React from "react";

import "./BeachDetailHeader.scss";

function BeachDetailHeader(props) {
  return (
    <div className="beach-detail-header">
      {props.children}
      <div className="beach-detail-header__media">
        <img
          src={props.image}
          alt={props.alt}
          className="beach-detail-header__image"
        />
      </div>
      <div className="beach-detail-header__details">
        <span>address</span>
        <span>phone</span>
        <span>button</span>
      </div>
    </div>
  );
}

export default BeachDetailHeader;

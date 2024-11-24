import React from "react";
import { Icon } from "@trussworks/react-uswds";

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
        <span className="beach-detail-header__details-item">
          <span className="beach-detail-header__details-icon">
            <Icon.LocationOn size={4} />
          </span>
          <span className="beach-detail-header__details-text">
            <span>{props.addressLine1}</span>
            <span>{props.addressLine2}</span>
          </span>
        </span>
        <span className="beach-detail-header__details-item">
          <span className="beach-detail-header__details-icon">
            <Icon.Phone size={4} />
          </span>
          <span className="beach-detail-header__details-text">
            <span>{props.phoneLine1}</span>
            <span>{props.phoneLine2}</span>
          </span>
        </span>
        <span>button</span>
      </div>
    </div>
  );
}

export default BeachDetailHeader;

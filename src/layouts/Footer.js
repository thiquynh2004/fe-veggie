import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons"
import React from "react";
import { Row, Col } from "react-bootstrap";

export default function Footer() {
  return (
    <div className="footer">
      <Row>
        <Col xs={6}>
            <FontAwesomeIcon icon = {faMapMarkerAlt}>
            Address
            </FontAwesomeIcon>
        </Col>
        <Col xs={6}>xs=6</Col>
      </Row>
      <Row>
        <Col xs={6} md={4}>
          xs=6 md=4
        </Col>
        <Col xs={6} md={4}>
          xs=6 md=4
        </Col>
        <Col xs={6} md={4}>
          xs=6 md=4
        </Col>
      </Row>
    </div>
  );
}

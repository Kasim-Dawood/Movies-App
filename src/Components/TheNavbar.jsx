import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import logo from "../images/logo.png";

export const TheNavbar = ({ SearchHandler }) => {
  return (
    <div className="nav-style w-100">
      <Container>
        <Row className="pt-2">
          <Col xs="2" lg="1">
            <a href="/">
              <img className="logo" src={logo} alt="logo" />
            </a>
          </Col>

          <Col sm="10" lg="11" className="d-flex align-items-center">
            <div className="search w-100">
              <i className="fa fa-search"></i>
              <input
                type="text"
                placeholder="Search"
                className="form-control"
                onChange={(e) => SearchHandler(e.target.value)}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

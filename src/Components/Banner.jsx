import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import country from "../assets/independance.svg";
import check from "../assets/verified.svg";
import "../App.css";
const Banner = () => {
  return (
    <>
      <div className="banner">
        <Container>
          <Row >
            <Col md={7}>
              <h3 className="heading-1">
                Historic & Unparalleled Achievement ! India’s Glorious Journey of
              </h3>
              <div className="card counter my-4">
                <h3 className="counter-h3">
                  <img src={check} alt="" />
                  &nbsp; 200 CRORE VACCINATIONS
                </h3>
              </div>
              <h5 className="content-5">
                "India is set to defeat Covid-19. Every Indian is making it
                possible."
              </h5>
              <h6 className="primeMinister">- PM Narendra Modi</h6>
            </Col>
            <Col md={5} className="text-center">
              <img className="country" src={country} alt="" />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Banner;

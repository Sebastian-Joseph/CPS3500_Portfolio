import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";

import research1 from "../../Assets/research1.jpg";
import research2 from "../../Assets/research2.jpg";

function Research() {
  return (
    <Container fluid className="home-section">
      <Particle />

      <Container className="home-content">
        <Row style={{ justifyContent: "center", padding: "40px 0" }}>
          <Col md={10} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              RESEARCH <span className="purple">PUBLICATION</span>
            </h1>

            <h3 style={{ paddingTop: "20px" }}>
              Deriving Environmental Properties Related to Human Environmental
              Perception: A Comparison Between Aerial Image Classification and
              Street View Image Segmentation
            </h3>

            <h5 style={{ paddingTop: "10px" }}>
              <span className="purple">Published in</span>{" "}
              <a
                href="https://onlinelibrary.wiley.com/journal/24753629"
                target="_blank"
                rel="noreferrer">
                Urban Science Journal
              </a>{" "}
              · Nov 18, 2025
            </h5>

            <p className="home-about-body" style={{ paddingTop: "30px" }}>
              This publication explores how environmental features captured from
              aerial imagery align with those captured from street view imagery
              at corresponding urban locations within New Jersey, United States.
              <br />
              <br />
              The study compares classification and segmentation outputs derived
              from aerial images and Google Street View images across multiple
              buffer zones to evaluate agreement in environmental property
              estimation.
              <br />
              <br />
              My work focused on applying computer vision and image segmentation
              pipelines to derive environmental characteristics from
              street-level imagery.
              <br />
              <br />
              The findings highlight how greenness, buildings, grass, and road
              features may differ depending on observation perspective and
              spatial buffering strategy.
            </p>

            {/* Research Images Section */}
            <Row style={{ paddingTop: "40px" }}>
              <Col md={6} style={{ paddingBottom: "20px" }}>
                <img
                  src={research1}
                  alt="Research visualization 1"
                  className="img-fluid"
                  style={{
                    borderRadius: "20px",
                    maxHeight: "400px",
                    objectFit: "contain",
                    width: "100%",
                  }}
                />
              </Col>

              <Col md={6}>
                <img
                  src={research2}
                  alt="Research visualization 2"
                  className="img-fluid"
                  style={{
                    borderRadius: "20px",
                    maxHeight: "400px",
                    objectFit: "contain",
                    width: "100%",
                  }}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Research;

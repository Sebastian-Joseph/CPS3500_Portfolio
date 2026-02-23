import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m a Computer Science student and Software Developer focused on
              building intelligent, scalable systems that bridge research and
              real-world applications.
              <br />
              <br />
              As a <b className="purple">Software Developer Intern</b>, I built
              a dashboard messaging system using Angular, .NET, and AWS —
              migrating 200+ messages to DynamoDB and contributing to cost
              savings of over $12,000 annually.
              <br />
              <br />
              As an <b className="purple">Undergraduate Research Assistant</b>,
              I developed image segmentation pipelines using Python and
              PaddleSeg to analyze environmental properties and their
              relationship to human perception.
              <br />
              <br />I enjoy working with
              <i>
                <b className="purple">
                  {" "}
                  JavaScript, TypeScript, Python, Java, Angular, .NET, and
                  AWS{" "}
                </b>
              </i>
              — and I’m especially interested in AI-driven applications,
              computer vision, and full-stack development.
              <br />
              <br />
              Beyond software, I’ve also built immersive VR research
              environments in Unity to support experimental data collection.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;

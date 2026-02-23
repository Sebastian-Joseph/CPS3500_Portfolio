import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";

function Experience() {
  return (
    <Container fluid className="home-section">
      <Particle />

      <Container className="home-content">
        <Row style={{ justifyContent: "center", padding: "40px 0" }}>
          <Col md={10} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              PROFESSIONAL <span className="purple">EXPERIENCE</span>
            </h1>

            {/* Software Developer Intern */}
            <div style={{ paddingTop: "40px" }}>
              <h3>
                Software Developer Intern —{" "}
                <span className="purple">Coaction Global</span>
              </h3>
              <p>
                <i>Jun 2025 – Aug 2025 · Morristown, NJ · On-site</i>
              </p>
              <ul className="home-about-body">
                <li>
                  Developed a dashboard messaging system using Angular, .NET,
                  and AWS to deliver announcements and outage alerts to
                  customers.
                </li>
                <li>
                  Migrated 200+ legacy messages to DynamoDB, improving query
                  performance and contributing to ~$12,000 in annual cost
                  savings.
                </li>
                <li>
                  Delivered daily progress updates, identified blockers, and
                  ensured deadlines were met in an Agile/Scrum environment.
                </li>
                <li>
                  Presented proposed technical solutions directly to executive
                  leadership.
                </li>
              </ul>
            </div>

            {/* Undergraduate Research Assistant */}
            <div style={{ paddingTop: "40px" }}>
              <h3>
                Undergraduate Research Assistant —{" "}
                <span className="purple">Kean University</span>
              </h3>
              <p>
                <i>Mar 2024 – Present · Hybrid</i>
              </p>
              <ul className="home-about-body">
                <li>
                  Developed Python-based computer vision pipelines using
                  PaddleSeg for image segmentation and environmental feature
                  extraction.
                </li>
                <li>
                  Enhanced resolution of Google Street View imagery to improve
                  segmentation accuracy and analytical quality.
                </li>
                <li>
                  Investigated relationships between environmental properties
                  and psychological responses.
                </li>
                <li>
                  Built immersive VR research environments in Unity to support
                  experimental data collection.
                </li>
                <li>
                  Contributed to weekly lab reports documenting findings,
                  improvements, and research outcomes.
                </li>
              </ul>
            </div>

            {/* Resident Assistant */}
            <div style={{ paddingTop: "40px" }}>
              <h3>
                Resident Assistant —{" "}
                <span className="purple">Kean University</span>
              </h3>
              <p>
                <i>Aug 2023 – Jan 2025 · On-site</i>
              </p>
              <ul className="home-about-body">
                <li>
                  Managed and supported a residential floor of 100+ students,
                  providing conflict resolution and campus resources.
                </li>
                <li>
                  Designed and executed 12 annual educational programs and
                  monthly engagement initiatives.
                </li>
                <li>
                  Led residence hall tours and supported university open house
                  events.
                </li>
                <li>
                  Fostered a positive living environment through peer mediation
                  and proactive problem solving.
                </li>
              </ul>
            </div>

            {/* Desk Manager */}
            <div style={{ paddingTop: "40px" }}>
              <h3>
                Desk Manager —{" "}
                <span className="purple">
                  Kean University Residential Services
                </span>
              </h3>
              <p>
                <i>Jan 2024 – May 2024 · On-site</i>
              </p>
              <ul className="home-about-body">
                <li>
                  Supervised a team of 12 Desk Service Representatives
                  overseeing residence hall security operations.
                </li>
                <li>
                  Conducted end-of-semester performance evaluations and
                  goal-setting sessions.
                </li>
                <li>
                  Authored weekly security and incident reports to maintain
                  operational standards.
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Experience;

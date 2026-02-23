import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Particle from "../Particle";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Contact() {
  return (
    <Container fluid className="home-section">
      <Particle />

      <Container className="home-content">
        <Row style={{ justifyContent: "center", padding: "40px 0" }}>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              GET IN <span className="purple">TOUCH</span>
            </h1>

            <p className="home-about-body" style={{ paddingTop: "20px" }}>
              Whether it’s research collaboration, software development,
              internships, or just a good tech conversation — I’m always open to
              connecting.
            </p>

            {/* Contact Form */}
            <Form style={{ paddingTop: "30px" }}>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Your Name" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control type="email" placeholder="Your Email" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Your Message"
                />
              </Form.Group>

              <div style={{ textAlign: "center" }}>
                <Button
                  variant="primary"
                  type="submit"
                  style={{
                    padding: "10px 30px",
                    borderRadius: "30px",
                  }}>
                  Send Message
                </Button>
              </div>
            </Form>

            {/* Social Links */}
            <Row style={{ paddingTop: "50px", textAlign: "center" }}>
              <Col>
                <h3>Find Me On</h3>
                <ul className="home-about-social-links">
                  <li className="social-icons">
                    <a
                      href="https://github.com/YOUR_USERNAME"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons">
                      <AiFillGithub />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://linkedin.com/in/YOUR_USERNAME"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons">
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://instagram.com/YOUR_USERNAME"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons">
                      <AiFillInstagram />
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;

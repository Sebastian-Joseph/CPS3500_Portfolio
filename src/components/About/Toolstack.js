import React from "react";
import { Col, Row } from "react-bootstrap";
import google_chrome from "../../Assets/TechIcons/google_chrome.png";
import vscode from "../../Assets/TechIcons/vscode.png";
import intellij from "../../Assets/TechIcons/intellij.png";
import ubuntu from "../../Assets/TechIcons/ubuntu.png";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={google_chrome} alt="Chrome" className="tech-icon-images" />
        <div className="tech-icons-text">Google Chrome</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={vscode} alt="vsCode" className="tech-icon-images" />
        <div className="tech-icons-text">Vs Code</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={intellij} alt="intellij" className="tech-icon-images" />
        <div className="tech-icons-text">IntelliJ</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={ubuntu} alt="ubuntu" className="tech-icon-images" />
        <div className="tech-icons-text">Ubuntu</div>
      </Col>
    </Row>
  );
}

export default Toolstack;

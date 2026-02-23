import React from "react";
import { Col, Row } from "react-bootstrap";
import angular from "../../Assets/TechIcons/angular.png";
import aws from "../../Assets/TechIcons/aws.png";
import DynamoDB from "../../Assets/TechIcons/DynamoDB.png";
import git from "../../Assets/TechIcons/git.png";
import java from "../../Assets/TechIcons/java.png";
import js from "../../Assets/TechIcons/js.png";
import net from "../../Assets/TechIcons/net.png";
import python from "../../Assets/TechIcons/python.png";
import sql from "../../Assets/TechIcons/sql.png";
import ts from "../../Assets/TechIcons/ts.png";
import unity from "../../Assets/TechIcons/unity.png";
import react from "../../Assets/TechIcons/react.png";
import paddleseg from "../../Assets/TechIcons/paddleseg.jpg";



function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={js} alt="javascript" />
        <div className="tech-icons-text">Javascript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={ts} alt="typescript" />
        <div className="tech-icons-text">Typescript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={git} alt="git" />
        <div className="tech-icons-text">Git</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={python} alt="Python" />
        <div className="tech-icons-text">Python</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={java} alt="java" />
        <div className="tech-icons-text">Java</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={aws} alt="aws" className="tech-icon-images" />
        <div className="tech-icons-text">AWS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={unity} alt="Unity" className="tech-icon-images" />
        <div className="tech-icons-text">Unity</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={angular} alt="Angular" className="tech-icon-images" />
        <div className="tech-icons-text">Angular</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={net} alt=".Net" className="tech-icon-images" />
        <div className="tech-icons-text">.Net</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={DynamoDB} alt="DynamoDB" className="tech-icon-images" />
        <div className="tech-icons-text">DynamoDB</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={sql} alt="SQL" className="tech-icon-images" />
        <div className="tech-icons-text">SQL</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={react} alt="react" className="tech-icon-images" />
        <div className="tech-icons-text">React</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={paddleseg} alt="paddleseg" className="tech-icon-images" />
        <div className="tech-icons-text">PaddleSeg</div>
      </Col>
    </Row>
  );
}

export default Techstack;

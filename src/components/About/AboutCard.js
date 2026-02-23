import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi! I’m <span className="purple">Sebastian Joseph</span>, a Computer
            Science student at <span className="purple">Kean University</span>{" "}
            graduating May 2026.
            <br />
            <br />I specialize in{" "}
            <span className="purple">AI-driven software development</span>,
            full-stack engineering, and research-focused computer vision.
            <br />
            <br />
            I’ve worked as a{" "}
            <span className="purple">Software Developer Intern</span> building
            scalable dashboard systems using Angular, .NET, and AWS — helping
            save over <span className="purple">$12,000 annually</span> through
            system improvements.
            <br />
            <br />
            As an{" "}
            <span className="purple">Undergraduate Research Assistant</span>, I
            developed image segmentation pipelines using Python and PaddleSeg to
            analyze environmental features and psychological perception.
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> AI & Computer Vision Research
            </li>
            <li className="about-activity">
              <ImPointRight /> Full-Stack Web Development
            </li>
            <li className="about-activity">
              <ImPointRight /> VR Environment Development in Unity
            </li>
            <li className="about-activity">
              <ImPointRight /> Building tools that solve real-world problems
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Build systems that scale. Build tools that matter."
          </p>
          <footer className="blockquote-footer">Sebastian</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

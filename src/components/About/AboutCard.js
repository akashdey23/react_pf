import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Akash Dey </span>
            from <span className="purple"> Bhubaneswar, India.</span>
            <br />
            I am currently studing in Silicon University, Bhubaneshwar.
            <br />
            Pursuing my B. Tech in Computer Sci. & Technology Branch.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Chess
            </li>
            <li className="about-activity">
              <ImPointRight /> Making Apps and Websites
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing and exploring PC games
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Developer is in Coding Mode"{" "}
          </p>
          <footer className="blockquote-footer">Akash</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

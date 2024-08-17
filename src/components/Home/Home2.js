import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/akash.jpeg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

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
            Code is my canvas, and every line is a stroke of innovation.
              <br />
              <br />I am well in the areas of 
              <i>
                <b className="purple"> C++, Javascript and DSA. </b>
              </i>
              <br />
              <br />
              My interests lie in crafting innovative  &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> and
                with a keen focus on exploring the realms of {" "}
                <b className="purple">
                  Machine Learning.
                </b>
              </i>
              <br />
              <br />
                I thrive on opportunities to develop products using
                <b className="purple"> Node.js</b> and {" "}
                <i>
                  <b className="purple">
                      cutting-edge JavaScript libraries and frameworks
                  </b>
                </i>
                &nbsp; like
                <i>
                  <b className="purple"> React.js and Next.js</b>
                </i>.
                <br />

            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
            <img
  src={myImg}
  className="img-fluid"
  alt="avatar"
  style={{
    width: "300px", // Adjust width to your desired size
    height: "300px", // Set height to match the width
    borderRadius: "50%", // Makes the image circular
    objectFit: "cover" // Ensures the image fits well within the circular shape
  }}
/>

            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/akashdey23"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/akashdey9128"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/akashdey23/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/akashhhhh.ig"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;

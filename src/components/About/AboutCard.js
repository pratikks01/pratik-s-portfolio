import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello there!, I'm <span className="purple">Pratik Shastrakar </span>
            from <span className="purple"> Nagpur, MH, India.</span>
            <br />I am pursuing B.E. from Shri Ramdeobaba College of Engineering
            and Management, Nagpur
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Photography 📸
            </li>
            <li className="about-activity">
              <ImPointRight /> Making Videos 🎥
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing around with Electronics ⚡
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

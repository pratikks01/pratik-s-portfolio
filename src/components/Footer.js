import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
	AiFillGithub,
	AiOutlineTwitter,
	AiFillInstagram,
	AiFillMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
	let date = new Date();
	let year = date.getFullYear();
	return (
		<Container fluid className="footer">
			<Row>
				<Col md="4" className="footer-copyright">
					<h3>Made by Pratik Shastrakar</h3>
				</Col>
				<Col md="4" className="footer-copyright">
					<h3>Copyright © {year} pratikks01</h3>
				</Col>
				<Col md="4" className="footer-body">
					<ul className="footer-icons">
						<li className="social-icons">
							<a
								href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=pshastrakar4@gmail.com"
								style={{ color: "white" }}
								target="_blank"
								rel="noopener noreferrer"
							>
								<AiFillMail />
							</a>
						</li>
						<li className="social-icons">
							<a
								href="https://github.com/pstricks01"
								style={{ color: "white" }}
								target="_blank"
								rel="noopener noreferrer"
							>
								<AiFillGithub />
							</a>
						</li>
						<li className="social-icons">
							<a
								href="https://www.linkedin.com/in/pratikshastrakar/"
								style={{ color: "white" }}
								target="_blank"
								rel="noopener noreferrer"
							>
								<FaLinkedinIn />
							</a>
						</li>
						<li className="social-icons">
							<a
								href="https://www.instagram.com/pratikks01/"
								style={{ color: "white" }}
								target="_blank"
								rel="noopener noreferrer"
							>
								<AiFillInstagram />
							</a>
						</li>
						<li className="social-icons">
							<a
								href="https://twitter.com/pstricks01"
								style={{ color: "white" }}
								target="_blank"
								rel="noopener noreferrer"
							>
								<AiOutlineTwitter />
							</a>
						</li>
					</ul>
				</Col>
			</Row>
		</Container>
	);
}

export default Footer;

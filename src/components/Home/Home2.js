import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import myImg from "../../Assets/avatar.svg";
import myImg from "../../Assets/ps.png";
import Tilt from "react-parallax-tilt";
import {
	AiFillGithub,
	AiOutlineTwitter,
	AiFillInstagram,
	AiFillMail,
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
							I fell in love with programming and, I believe, I have learned
							something...
							<br />
							<br />I am good in classics like
							<i>
								<b className="purple"> C, C++, and Python. </b>
							</i>
							<br />
							<br />
							My areas of expertise include the development of new &nbsp;
							<i>
								<b className="purple">Web Technologies and Products </b>
								{/* and
                also in areas related to{" "} */}
								{/* <b className="purple"> */}
								{/* Some Machine Learning.
                </b> */}
							</i>
							<br />
							<br />
							I've only recently begun researching the world of web development
							and new and intriguing technologies like as{" "}
							{/* <b className="purple">Node.js</b> and */}
							<i>
								<b className="purple"> Cloud Computing</b>
							</i>
							&nbsp; and
							<i>
								<b className="purple"> React.js and Node.js</b>
							</i>
						</p>
					</Col>
					<Col md={4} className="myAvtar">
						<Tilt>
							<img src={myImg} className="img-fluid" alt="avatar" />
						</Tilt>
					</Col>
				</Row>
				<Row>
					<Col md={12} className="home-about-social">
						{/* <h1>FIND ME ON</h1> */}
						<p>
							Please feel free to <span className="purple">connect </span>with
							me
						</p>
						<ul className="home-about-social-links">
							<li className="social-icons">
								<a
									href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=pshastrakar4@gmail.com"
									target="_blank"
									rel="noreferrer"
									className="icon-colour  home-social-icons"
								>
									<AiFillMail />
								</a>
							</li>
							<li className="social-icons">
								<a
									href="https://github.com/pstricks01"
									target="_blank"
									rel="noreferrer"
									className="icon-colour  home-social-icons"
								>
									<AiFillGithub />
								</a>
							</li>
							<li className="social-icons">
								<a
									href="https://www.linkedin.com/in/pratikshastrakar/"
									target="_blank"
									rel="noreferrer"
									className="icon-colour  home-social-icons"
								>
									<FaLinkedinIn />
								</a>
							</li>
							<li className="social-icons">
								<a
									href="https://www.instagram.com/pratikks01/"
									target="_blank"
									rel="noreferrer"
									className="icon-colour home-social-icons"
								>
									<AiFillInstagram />
								</a>
							</li>
							<li className="social-icons">
								<a
									href="https://twitter.com/pratikks01"
									target="_blank"
									rel="noreferrer"
									className="icon-colour  home-social-icons"
								>
									<AiOutlineTwitter />
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

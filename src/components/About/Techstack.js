import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { SiMicrosoftazure } from "react-icons/si";
import {
	DiJavascript1,
	DiReact,
	DiNodejs,
	DiMongodb,
	DiPython,
	DiGit,
} from "react-icons/di";

function Techstack() {
	return (
		<Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
			<Col xs={4} md={2} alt="c++" className="tech-icons">
				<CgCPlusPlus />
			</Col>
			<Col xs={4} md={2} alt="Python" className="tech-icons">
				<DiPython />
			</Col>
			<Col xs={4} md={2} alt="javascript" className="tech-icons">
				<DiJavascript1 />
			</Col>
			<Col xs={4} md={2} alt="Node JS" className="tech-icons">
				<DiNodejs />
			</Col>
			<Col xs={4} md={2} alt="React.js" className="tech-icons">
				<DiReact />
			</Col>
			<Col xs={4} md={2} alt="Microsoft Azure" className="tech-icons">
				<SiMicrosoftazure />
			</Col>
			<Col xs={4} md={2} alt="Mongo DB" className="tech-icons">
				<DiMongodb />
			</Col>
			<Col xs={4} md={2} alt="Git" className="tech-icons">
				<DiGit />
			</Col>
		</Row>
	);
}

export default Techstack;

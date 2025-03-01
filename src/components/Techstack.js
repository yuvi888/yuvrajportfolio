import React from "react";
import { Col, Row } from "react-bootstrap";
import { motion } from 'framer-motion'
import {
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiJava,
  DiHtml5,
  DiCss3,
  DiJsBadge,
} from "react-icons/di";
import {
  SiFirebase,
  SiDatastax,
} from "react-icons/si";

function Techstack() {
  return (
    <motion.div   initial={{ opacity: 0, y: 400 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: false }}>
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={3} className="tech-icons">
        <DiJava />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <SiDatastax />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <DiReact />
      </Col>
     
      <Col xs={4} md={3} className="tech-icons">
        <DiHtml5 />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <DiCss3 />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <DiJsBadge />
      </Col>
     
      <Col xs={4} md={3} className="tech-icons">
        <DiNodejs />
      </Col>
      
     
      <Col xs={4} md={3} className="tech-icons">
        <DiMongodb />
      </Col>
    
      <Col xs={4} md={3} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <SiFirebase />
      </Col>
      
     
    </Row>
    </motion.div>
  );
}

export default Techstack;

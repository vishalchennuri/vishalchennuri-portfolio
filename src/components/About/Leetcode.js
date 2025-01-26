import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Leetcode() {
  return (
    <Container fluid className="leetcode-section">
      <Container>
        <Row>
          <Col md={12} className="leetcode-header">
            <h1 className="heading">
              My <strong className="purple">Leetcode</strong> Profile
            </h1>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="leetcode-content">
            <iframe
              src="https://leetcard.jacoblin.cool/VishalChennuri?theme=dark&font=Noto%20Sans"
              title="Leetcode Profile"
              width="100%"
              height="300px"
              style={{ border: "none" }}
            ></iframe>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Leetcode;
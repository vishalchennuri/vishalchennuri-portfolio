import React from "react";
import { Container, Button } from "react-bootstrap";
import { AiOutlineDownload } from "react-icons/ai";

const pdfLink = "https://drive.google.com/file/d/18F3tJ5BDQLeHllJDK1XsLgxjab0dLeVn/view"; // Replace with your Google Drive link

function ResumeNew() {
  const handleDownload = () => {
    window.open(pdfLink, "_blank");
  };

  return (
    <Container fluid className="resume-section">
      <Button variant="primary" onClick={handleDownload}>
        <AiOutlineDownload />
        &nbsp;Download Resume
      </Button>
    </Container>
  );
}

export default ResumeNew;
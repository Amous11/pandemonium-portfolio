import PropTypes from "prop-types";
import { Col, Container, Row } from "react-bootstrap";

export function ProjectDescription({ title, desc }) {
  return (
    <>
      <Container>
        <Row className="my-5">
          <Col xs={12} md={3}>
            <p style={{ color: "grey" }} id="info">
              Title
            </p>
            <p>-</p>
            <Row>
              <Col xs={6}>
                <h1>
                  <b>{title}</b>
                </h1>
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={9}>
            <p style={{ color: "grey" }}>Description</p>
            <p>-</p>
            <div dangerouslySetInnerHTML={{ __html: desc }} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

ProjectDescription.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.node,
};

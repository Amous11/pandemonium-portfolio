import React from "react";
import PropTypes from "prop-types";
import { Col, Container, Row, Stack } from "react-bootstrap";

export function Footer(props) {
  return (
    <>
      <Container>
        <Row className="mt-4">
          <Col></Col>
          <Col></Col>
          <Col>
            <Stack className="text-uppercase">
              <p style={{ color: "grey" }}>links</p>
              <p>instagram</p>
              <p>linkedin</p>
              <p>youtube</p>
            </Stack>
          </Col>
        </Row>
      </Container>
    </>
  );
}

Footer.propTypes = {};

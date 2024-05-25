import { Col, Container, Row, Stack } from "react-bootstrap";

export function MidSection() {
  return (
    <>
      <Container>
        <Row className="my-5">
          <Col xs={12} md={6}>
            <p style={{ color: "grey" }}>About</p>
            <p>-</p>
            <Row>
              <Col xs={6}>
                <p>
                  <b>
                    Pandemonium offers illustration, design, VFX, animation, and
                    directorial services.
                  </b>
                </p>
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={3}>
            <p style={{ color: "grey" }}>Social</p>
            <p>-</p>
            <Stack>
              <a href="">Instagram</a>
              <a href="">Behance</a>
              <a href="">Youtube</a>
            </Stack>
          </Col>
          <Col xs={12} md={3}>
            <p style={{ color: "grey" }}>Contact</p>
            <p>-</p>
            <p>
              If you have a scheduling inquiry for our creative services or wish
              to chat about an upcoming project need, please contact us at
              <a href="mailto:info@pandemonium.com"> info@pandemonium.com</a>
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

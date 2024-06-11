import { Col, Container, Row, Stack } from "react-bootstrap";

export function MidSection() {
  return (
    <>
      <Container>
        <Row className="my-5">
          <Col xs={12} md={6}>
            <p style={{ color: "grey" }} id="info">
              About
            </p>
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
              <div>
                <a
                  href="https://www.linkedin.com/company/pandemonium-visuals"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </div>
              <div>
                <a
                  href="https://www.instagram.com/pandemomium.visuals/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </div>
            </Stack>
          </Col>
          <Col xs={12} md={3}>
            <p style={{ color: "grey" }}>Contact</p>
            <p>-</p>
            <p>
              If you have a scheduling inquiry for our creative services or wish
              to chat about an upcoming project need, please contact us at{" "}
              <a href="mailto:contact@pandemoniumvisuals.com">
                contact@pandemoniumvisuals.com
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

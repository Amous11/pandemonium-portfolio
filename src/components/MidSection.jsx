import { Col, Container, Row, Stack } from "react-bootstrap";
import { link, mail } from "../utils/globals";

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
                  href={link.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </div>
              <div>
                <a
                  href={link.instagram}
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
              <a href={mail.contact} className="text-break">
                contact@pandemoniumvisuals.com
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

import { Col, Container, Row, Stack } from "react-bootstrap";

export function Footer() {
  return (
    <>
      <Container>
        <hr className="my-5" />
        <Row className="mt-5 pb-5">
          <Col xs={12} md={6}>
            <p style={{ color: "grey" }}>Copyright</p>
            <p>-</p>
            <Row>
              <Col>
                <p>
                  <b>© 2023 Pandemonium Visuals, Inc.</b>
                </p>
              </Col>
              <Col></Col>
            </Row>
          </Col>
          <Col xs={12} md={4}>
            <p style={{ color: "grey" }}>Contact</p>
            <p>-</p>
            <p>
              <a href="mailto:contact@pandemoniumvisuals.com">
                contact@pandemoniumvisuals.com
              </a>
            </p>
          </Col>
          <Col xs={12} md={2}>
            <p style={{ color: "grey" }}>Social</p>
            <p>-</p>
            <Stack>
              <div>
                <a href="https://www.linkedin.com/company/pandemonium-visuals">
                  LinkedIn
                </a>
              </div>
              <div>
                <a href="">Instagram</a>
              </div>
            </Stack>
          </Col>
        </Row>
      </Container>
    </>
  );
}

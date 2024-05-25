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
                  <b>© 2023 Pandemonium, Inc.</b>
                </p>
              </Col>
              <Col></Col>
            </Row>
          </Col>
          <Col xs={12} md={4}>
            <p style={{ color: "grey" }}>Contact</p>
            <p>-</p>
            <p>
              <a href="mailto:info@pandemonium.com">info@pandemonium.com</a>
            </p>
          </Col>
          <Col xs={12} md={2}>
            <p style={{ color: "grey" }}>Social</p>
            <p>-</p>
            <Stack>
              <a href="">Instagram</a>
              <a href="">Behance</a>
              <a href="">Youtube</a>
            </Stack>
          </Col>
        </Row>
      </Container>
    </>
  );
}

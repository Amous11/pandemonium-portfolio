import { Col, Container, Row } from "react-bootstrap";
import { Video } from "./Video";
import PropTypes from "prop-types";

export function VideoGrid({ vids, left }) {
  return (
    <>
      <Container fluid>
        <Row className="my-2" style={{ height: "100vh" }}>
          {left && (
            <Col md={6} className="p-0 pe-1">
              <Video src={vids[1].src} overlay={vids[1].ctg} insideGrid />
            </Col>
          )}
          <Col md={6} className="d-flex flex-column p-0">
            <Row className={`flex-grow-1 ${left ? "ps-1" : "pe-1"}`}>
              <Col>
                <Video src={vids[0].src} overlay={vids[0].ctg} insideGrid />
              </Col>
            </Row>
            {vids.length > 2 && (
              <Row className={`flex-grow-1 mt-2 ${left ? "ps-1" : "pe-1"}`}>
                <Col>
                  <Video src={vids[2].src} overlay={vids[2].ctg} insideGrid />
                </Col>
              </Row>
            )}
          </Col>
          {!left && (
            <Col md={6} className="p-0 ps-1">
              <Video src={vids[1].src} overlay={vids[1].ctg} insideGrid />
            </Col>
          )}
        </Row>
      </Container>
    </>
  );
}
VideoGrid.propTypes = {
  vids: PropTypes.array,
  left: PropTypes.bool,
};

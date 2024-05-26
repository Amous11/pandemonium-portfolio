import { Col, Container, Row } from "react-bootstrap";
import { Media } from "./Media";
import PropTypes from "prop-types";

export function MediaGrid({ vids, left }) {
  return (
    <>
      <Container fluid className="overflow-hidden">
        <Row className="my-1" style={{ height: "100vh" }}>
          {left && (
            <Col md={6} className="p-0 pe-1">
              <Media
                src={vids[1].src}
                thumbnail={vids[1].thumbnail}
                path={vids[1].path}
                insideGrid
              />
            </Col>
          )}
          <Col md={6} className="d-flex flex-column p-0">
            <Row className={`flex-grow-1 ${left ? "ps-1" : "pe-1"}`}>
              <Col>
                <Media
                  src={vids[0].src}
                  thumbnail={vids[0].thumbnail}
                  path={vids[0].path}
                  insideGrid
                />
              </Col>
            </Row>
            {vids.length > 2 && (
              <Row className={`flex-grow-1 mt-2 ${left ? "ps-1" : "pe-1"}`}>
                <Col>
                  <Media
                    src={vids[2].src}
                    thumbnail={vids[2].thumbnail}
                    path={vids[2].path}
                    insideGrid
                  />
                </Col>
              </Row>
            )}
          </Col>
          {!left && (
            <Col md={6} className="p-0 ps-1">
              <Media
                src={vids[1].src}
                thumbnail={vids[1].thumbnail}
                path={vids[1].path}
                insideGrid
              />
            </Col>
          )}
        </Row>
      </Container>
    </>
  );
}
MediaGrid.propTypes = {
  vids: PropTypes.array,
  left: PropTypes.bool,
};

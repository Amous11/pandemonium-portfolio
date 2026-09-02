import PropTypes from "prop-types";
import { Col, Container, Row } from "react-bootstrap";

export function TeamMember({
  imageSrc,
  fullName,
  description,
  role,
  direction = "right",
}) {
  const imageOnLeft = direction === "left";
  const imageColumn = (
    <Col
      xs={12}
      md="auto"
      className={`d-flex justify-content-center ${
        imageOnLeft ? "justify-content-md-end" : "justify-content-md-start"
      }`}
    >
      <img
        src={imageSrc}
        alt={fullName}
        loading="lazy"
        style={{
          display: "block",
          width: "20rem",
          maxWidth: "100%",
          aspectRatio: "4 / 3",
          height: "auto",
          objectFit: "cover",
        }}
      />
    </Col>
  );
  const detailsColumn = (
    <Col
      xs={12}
      md
      className={`d-flex flex-column justify-content-center p-4 p-md-5 ${
        imageOnLeft ? "text-start" : "text-end"
      }`}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "600px",
          alignSelf: imageOnLeft ? "flex-start" : "flex-end",
        }}
      >
        <p style={{ color: "grey" }}>{role}</p>
        <p>-</p>
        <h1>
          <b>{fullName}</b>
        </h1>
        <div>{description}</div>
      </div>
    </Col>
  );

  return (
    <section className="my-5" aria-label={fullName}>
      <Container fluid className="px-0">
        <Row className="g-0 align-items-stretch">
          {imageOnLeft ? imageColumn : detailsColumn}
          {imageOnLeft ? detailsColumn : imageColumn}
        </Row>
      </Container>
    </section>
  );
}

TeamMember.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  fullName: PropTypes.string.isRequired,
  description: PropTypes.node.isRequired,
  role: PropTypes.string.isRequired,
  direction: PropTypes.oneOf(["left", "right"]),
};

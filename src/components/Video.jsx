import PropTypes from "prop-types";
import { Container } from "react-bootstrap";

export function Video({ videoStyle, src, overlay, autoPlay }) {
  return (
    <>
      <div className={`video-background ${videoStyle || ""}`}>
        <video autoPlay={autoPlay} loop muted>
          <source src={src} type="video/mp4" />
        </video>
        {overlay && (
          <Container>
            <div className="border border-primary">text</div>
          </Container>
        )}
      </div>
    </>
  );
}

Video.propTypes = {
  videoStyle: PropTypes.string,
  overlay: PropTypes.bool,
  src: PropTypes.string,
  autoPlay: PropTypes.bool,
};

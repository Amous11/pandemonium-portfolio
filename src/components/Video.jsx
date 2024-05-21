import PropTypes from "prop-types";
import { useRef } from "react";
import { Container } from "react-bootstrap";
import logo from "../assets/logo.png";

export function Video({ src, overlay, autoPlay, insideGrid, noLogo = true }) {
  const videoRef = useRef();

  const handleMouseEnter = () => {
    if (videoRef.current && !autoPlay) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current && !autoPlay) {
      videoRef.current.pause();
    }
  };

  return (
    <div
      className={`video-background d-flex align-items-stretch`}
      style={{ width: "100%", height: insideGrid ? "100%" : "100vh" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video ref={videoRef} autoPlay={autoPlay} loop muted>
        <source src={src} type="video/mp4" />
      </video>
      {overlay && (
        <Container className="d-flex align-items-stretch h-100 p-0 m-0">
          <div className="d-flex flex-column justify-content-between w-100 p-3">
            {noLogo ? <div></div> : <img src={logo} width="45" height="45" />}
            <p className="m-0">{overlay}</p>
          </div>
        </Container>
      )}
    </div>
  );
}

Video.propTypes = {
  videoStyle: PropTypes.string,
  overlay: PropTypes.string,
  src: PropTypes.string,
  autoPlay: PropTypes.bool,
  insideGrid: PropTypes.bool,
  noLogo: PropTypes.bool,
};
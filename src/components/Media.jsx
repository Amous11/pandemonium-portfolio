import PropTypes from "prop-types";
import { useRef } from "react";
import { Container } from "react-bootstrap";
import LazyLoad from "react-lazy-load";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export function Media({ src, overlay, autoPlay, insideGrid, hasLogo, path }) {
  const isVideo = src.endsWith("mp4") || src.endsWith("mov");
  const videoType = () => {
    if (src.endsWith("mov")) return "quicktime";
    else return "mp4";
  };
  const videoRef = useRef();

  const handleMouseEnter = () => {
    if (videoRef.current && !autoPlay) {
      const promise = videoRef.current.play();
      if (promise !== undefined) {
        promise.catch((error) => console.log(error));
      }
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current && !autoPlay) {
      const promise = videoRef.current.pause();
      if (promise !== undefined) {
        promise.catch((error) => console.log(error));
      }
    }
  };

  const content = (
    <div
      className="media-background d-flex align-items-stretch"
      style={{ width: "100%", height: insideGrid ? "100%" : "100vh" }}
      onMouseEnter={isVideo ? handleMouseEnter : undefined}
      onMouseLeave={isVideo ? handleMouseLeave : undefined}
    >
      <LazyLoad>
        {isVideo ? (
          <video ref={videoRef} autoPlay={autoPlay} loop muted>
            <source src={src} type={`video/${videoType()}`} />
          </video>
        ) : (
          <img src={src} />
        )}
      </LazyLoad>

      {overlay && (
        <Container className="overlay d-flex align-items-stretch h-100 p-0 m-0">
          <div className="d-flex flex-column justify-content-between w-100 p-3">
            {hasLogo ? <img src={logo} width="45" height="45" /> : <div></div>}
            <p className="m-0">{overlay}</p>
          </div>
        </Container>
      )}
    </div>
  );

  return <>{path ? <Link to={path}>{content}</Link> : content}</>;
}

Media.propTypes = {
  src: PropTypes.string,
  overlay: PropTypes.string,
  autoPlay: PropTypes.bool,
  insideGrid: PropTypes.bool,
  hasLogo: PropTypes.bool,
  path: PropTypes.string,
};

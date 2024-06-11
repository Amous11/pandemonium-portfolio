import PropTypes from "prop-types";
import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Button } from "react-bootstrap";

export function Media({
  src,
  thumbnail,
  autoPlay,
  insideGrid,
  path,
  volume,
  noMargin,
  muteButton,
}) {
  const videoRef = useRef(null);
  const [opacity, setOpacity] = useState(1);
  const [muted, setMuted] = useState(muteButton);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = volume ? volume : 1;
    }
  }, [volume]);

  const isVideo = src.endsWith("mp4") || src.endsWith("mov");
  const videoType = () => {
    if (src.endsWith("mov")) return "quicktime";
    else return "mp4";
  };

  const handleMouseEnter = () => {
    if (videoRef.current && !autoPlay) {
      setOpacity(0);
      const promise = videoRef.current.play();
      if (promise !== undefined) {
        promise.catch((error) => console.log(error));
      }
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current && !autoPlay) {
      setOpacity(1);
      const promise = videoRef.current.pause();
      if (promise !== undefined) {
        promise.catch((error) => console.log(error));
      }
    }
  };

  const handleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      videoRef.current.controls = !videoRef.current.controls;
      setMuted(false);
    }
  };

  const content = (
    <div
      className={`media-background d-flex align-items-stretch ${
        insideGrid || noMargin ? "" : "my-1"
      }`}
      style={{ width: "100%", height: insideGrid ? "100%" : "100vh" }}
      onMouseEnter={isVideo ? handleMouseEnter : undefined}
      onMouseLeave={isVideo ? handleMouseLeave : undefined}
    >
      <LazyLoad>
        {isVideo ? (
          <video
            ref={videoRef}
            autoPlay={autoPlay}
            loop
            muted={volume ? false : true}
          >
            <source src={src} type={`video/${videoType()}`} />
          </video>
        ) : (
          <img src={src} />
        )}
      </LazyLoad>

      {thumbnail && (
        <div className="media-overlay m-0 p-0">
          <LazyLoad>
            <img src={thumbnail} style={{ opacity: opacity }} />
          </LazyLoad>
        </div>
      )}

      {muted && (
        <Button variant="link" className="mute-button m-4" onClick={handleMute}>
          <img src="../public/muted.ico" height={32} width={32} />
        </Button>
      )}
    </div>
  );

  return <>{path ? <Link to={path}>{content}</Link> : content}</>;
}

Media.propTypes = {
  src: PropTypes.string,
  thumbnail: PropTypes.string,
  autoPlay: PropTypes.bool,
  insideGrid: PropTypes.bool,
  path: PropTypes.string,
  volume: PropTypes.number,
  noMargin: PropTypes.bool,
  muteButton: PropTypes.bool,
};

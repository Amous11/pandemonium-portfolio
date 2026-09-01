import PropTypes from "prop-types";
import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Button } from "react-bootstrap";
import vol from "../assets/mute.ico";
import { VideoLoader } from "./VideoLoader";

export function Media({
  src,
  thumbnail,
  images = [],
  autoPlay,
  insideGrid,
  path,
  volume,
  noMargin,
  muteButton,
  aspectRatio,
}) {
  const videoRef = useRef(null);
  const [opacity, setOpacity] = useState(1);
  const [videoLoading, setVideoLoading] = useState(Boolean(autoPlay));
  const [muted, setMuted] = useState(muteButton);
  const isVideo =
    typeof src === "string" &&
    ["mp4", "mov", "webm"].some((extension) => src.endsWith(extension));
  const hasSlideshow = !isVideo && images.length > 1;
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = volume ? volume : 1;
    }
  }, [volume]);

  const videoType = () => {
    if (src.endsWith("mov")) return "quicktime";
    else return src.substring(src.lastIndexOf(".") + 1).toLowerCase();
  };

  useEffect(() => {
    if (!hasSlideshow) return undefined;

    const interval = setInterval(() => {
      setActiveImage((current) => (current + 1) % images.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [hasSlideshow, images.length]);

  const handleMouseEnter = () => {
    if (videoRef.current && !autoPlay) {
      setVideoLoading(true);
      setOpacity(0);
      const promise = videoRef.current.play();
      if (promise !== undefined) {
        promise.catch((error) => {
          console.log(error);
          setVideoLoading(false);
        });
      }
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current && !autoPlay) {
      setVideoLoading(false);
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
      style={{
        width: "100%",
        height: aspectRatio ? "auto" : insideGrid ? "100%" : "100vh",
        aspectRatio,
      }}
      onMouseEnter={isVideo ? handleMouseEnter : undefined}
      onMouseLeave={isVideo ? handleMouseLeave : undefined}
    >
      <LazyLoad offset={300}>
        {isVideo ? (
          <>
            {videoLoading && <VideoLoader />}
            <video
              ref={videoRef}
              autoPlay={autoPlay}
              loop
              muted={volume ? false : true}
              onCanPlay={() => setVideoLoading(false)}
              onPlaying={() => setVideoLoading(false)}
              onError={() => setVideoLoading(false)}
            >
              <source src={src} type={`video/${videoType()}`} />
            </video>
          </>
        ) : hasSlideshow ? (
          <>
            {images.map((image, index) => (
              <img
                key={image}
                src={image}
                alt=""
                className="media-slideshow-image"
                style={{ opacity: activeImage === index ? 1 : 0 }}
              />
            ))}
          </>
        ) : (
          <img src={images[0] || src} alt="" />
        )}
      </LazyLoad>

      {thumbnail && !hasSlideshow && (
        <div className="media-overlay m-0 p-0">
          <LazyLoad offset={300}>
            <img src={thumbnail} style={{ opacity: opacity }} />
          </LazyLoad>
        </div>
      )}

      {muted && (
        <Button variant="link" className="mute-button m-4" onClick={handleMute}>
          <img src={vol} height={32} width={32} />
        </Button>
      )}
    </div>
  );

  return <>{path ? <Link to={path}>{content}</Link> : content}</>;
}

Media.propTypes = {
  src: PropTypes.string,
  thumbnail: PropTypes.string,
  images: PropTypes.arrayOf(PropTypes.string),
  autoPlay: PropTypes.bool,
  insideGrid: PropTypes.bool,
  path: PropTypes.string,
  volume: PropTypes.number,
  noMargin: PropTypes.bool,
  muteButton: PropTypes.bool,
  aspectRatio: PropTypes.string,
};

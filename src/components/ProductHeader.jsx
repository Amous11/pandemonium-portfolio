import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import { VideoLoader } from "./VideoLoader";

export function ProductHeader({ video }) {
  const videoRef = useRef();
  const [videoLoading, setVideoLoading] = useState(true);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = 1;
    }
  });

  return (
    <>
      <div className="product-header-video">
        {videoLoading && <VideoLoader />}
        <video
          style={{
            width: "100%",
            height: "100vh",
          }}
          autoPlay
          playsInline
          loop
          controls
          ref={videoRef}
          onCanPlay={() => setVideoLoading(false)}
          onPlaying={() => setVideoLoading(false)}
          onError={() => setVideoLoading(false)}
        >
          <source src={video} type="video/mp4" />
          Browser does not support video tag.
        </video>
      </div>
    </>
  );
}

ProductHeader.propTypes = { video: PropTypes.string };

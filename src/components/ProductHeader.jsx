import PropTypes from "prop-types";
import { useEffect, useRef } from "react";

export function ProductHeader({ video }) {
  const videoRef = useRef();

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = 0.1;
    }
  });

  return (
    <>
      <div>
        <video
          style={{
            width: "100%",
            height: "100vh",
          }}
          autoPlay
          controls
          ref={videoRef}
        >
          <source src={video} type="video/mp4" />
          Browser does not support video tag.
        </video>
      </div>
    </>
  );
}

ProductHeader.propTypes = { video: PropTypes.string };

import PropTypes from "prop-types";

export function ProductHeader({ video }) {
  return (
    <>
      <div>
        <video
          style={{
            width: "100%",
            height: "100%",
          }}
          src={video}
          autoPlay
          loop
          muted
          controls
        ></video>
      </div>
    </>
  );
}

ProductHeader.propTypes = { video: PropTypes.string };

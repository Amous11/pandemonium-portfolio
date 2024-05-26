import PropTypes from "prop-types";

export function ProductHeader({ video }) {
  return (
    <>
      <div style={{ height: "100vh", width: "100%" }}></div>
      <div className="fixed-video">
        <video
          style={{
            width: "100%",
            height: "100%",
          }}
          src={video}
          autoPlay
          muted
        ></video>
      </div>
    </>
  );
}

ProductHeader.propTypes = { video: PropTypes.string };

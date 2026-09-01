import logo from "../assets/logo.svg";

export function VideoLoader() {
  return (
    <div className="video-loader" role="status" aria-label="Loading video">
      <img className="video-loader-logo" src={logo} alt="" />
    </div>
  );
}

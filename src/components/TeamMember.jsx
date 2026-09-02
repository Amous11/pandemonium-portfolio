import PropTypes from "prop-types";

export function TeamMember({ imageSrc, fullName, role }) {
  return (
    <section className="my-5 text-start" aria-label={fullName}>
      <img
        src={imageSrc}
        alt={fullName}
        loading="lazy"
        style={{
          display: "block",
          width: "auto",
          aspectRatio: "3/4",
          height: "auto",
          maxHeight: "500px",
          objectFit: "cover",
        }}
      />
      <div className="pt-3">
        <p className="mb-0" style={{ color: "grey" }}>
          {role}
        </p>
        <h1>
          <b>{fullName}</b>
        </h1>
      </div>
    </section>
  );
}

TeamMember.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  fullName: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
};

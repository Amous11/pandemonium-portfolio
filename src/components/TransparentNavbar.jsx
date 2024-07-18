import { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../assets/logo.png";
import PropTypes from "prop-types";
import { HashLink as Link } from "react-router-hash-link";

export function TransparentNavbar({ solid }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > window.innerHeight * 0.9;
      if (show !== isScrolled) setIsScrolled(show);
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled]);

  return (
    <Navbar
      className={solid || isScrolled ? "navbar-solid" : "navbar-transparent"}
      fixed="top"
      expand="sm"
    >
      <Container>
        <Navbar.Brand href="/">
          <img
            alt=""
            src={logo}
            width="45"
            height="45"
            className="d-inline-block"
          />{" "}
          <span className="d-inline-block text-uppercase ps-2 text-light">
            Pandemonium
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Item>
              <Link
                to="/#gallery"
                className="nav-link text-light"
                style={{ textDecoration: "none" }}
              >
                Gallery
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                className="text-light"
                onClick={() => {
                  const targetElement = document.querySelector("#info");
                  window.scrollTo({
                    top: targetElement.offsetTop - 90,
                    behavior: "smooth",
                  });
                }}
              >
                Info
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

TransparentNavbar.propTypes = {
  solid: PropTypes.bool,
};

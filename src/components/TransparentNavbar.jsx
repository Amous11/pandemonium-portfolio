import { useEffect, useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import logo from "../assets/logo.png";

export function TransparentNavbar() {
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

  const navbarStyle = {
    backgroundColor: isScrolled ? "rgba(0, 0, 0, 1)" : "rgba(0, 0, 0, 0)",
    transition: "background-color 0.5s ease",
  };

  return (
    <>
      <Navbar style={navbarStyle} fixed="top" expand="sm">
        <Container>
          <Navbar.Brand href="#home">
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
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Nav.Link
                className="text-light"
                onClick={() => {
                  window.scrollTo(0, window.innerHeight * 0.9);
                }}
              >
                Info
              </Nav.Link>
              <NavDropdown
                title={<span className="text-light">Portfolio</span>}
              >
                <NavDropdown.Item>Installations</NavDropdown.Item>
                <NavDropdown.Item>CGI</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

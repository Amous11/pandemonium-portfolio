import { useEffect, useState } from "react";
import { Container, Navbar } from "react-bootstrap";
import logo from "../assets/logo.png";

export function TransparentNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 200;
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
      <Navbar style={navbarStyle} fixed="top" expand="lg">
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
        </Container>
      </Navbar>
    </>
  );
}

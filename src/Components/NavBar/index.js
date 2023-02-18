import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/images/logo.png";

function CollapsibleExample() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.2) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className={scrolled ? "bg-black" : "bg-transparent"}
    >
      <Navbar.Brand href="#home">
        <img src={logo} alt="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Container>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#features" style={{ color: "#ff9900" }}>
              Home
            </Nav.Link>
            <Nav.Link href="#pricing" style={{ color: "#ff9900" }}>
              Sobre
            </Nav.Link>
            <Nav.Link href="#pricing" style={{ color: "#ff9900" }}>
              Galeria
            </Nav.Link>
            <Nav.Link href="#pricing" style={{ color: "#ff9900" }}>
              Contato
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;

import { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../assets/img/logo.svg";
import { SocialIcons } from "../SocialIcons";
import "./index.scss";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActiveLink = (link: string) => (activeLink === link ? " active" : "");

  function onUpdateActiveLink(link: string) {
    return (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
      e.stopPropagation();
      setActiveLink(link);
    };
  }

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={`navbar-link${isActiveLink("home")}`}
              onClick={onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>

            <Nav.Link
              href="#skills"
              className={`navbar-link${isActiveLink("skills")}`}
              onClick={onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>

            <Nav.Link
              href="#projects"
              className={`navbar-link${isActiveLink("projects")}`}
              onClick={onUpdateActiveLink("projects")}
            >
              Projetos
            </Nav.Link>

          <Nav.Link
              href="#articles"
              className={`navbar-link${isActiveLink("articles")}`}
              onClick={onUpdateActiveLink("articles")}
            >
             Artigos
          </Nav.Link>
          </Nav>

          <span className="navbar-text">
            <SocialIcons />
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

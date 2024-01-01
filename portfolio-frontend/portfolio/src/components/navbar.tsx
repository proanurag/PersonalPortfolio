import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import styled from "styled-components";
import HomeLogo from "../assets/logo-no-background.png";
import { useState } from "react";

const Logo = styled.img`
  margin-right: 0px;
  height: 40px;
  margin-bottom: 5px;
  background-color: #1a1a1a;
`;

const NavbarCSS: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary mb-5"
      style={{ padding: "0" }}
    >
      <Container fluid style={{ backgroundColor: "#1a1a1a" }}>
        <Navbar.Brand
          href="/"
          style={{
            color: "#f0f0f0",
            fontFamily: "Lato, sans-serif",
            fontWeight: "bold",
            marginLeft: "20px",
          }}
        >
          <Logo src={HomeLogo} title="Home"></Logo>
          <div
            style={{
              display: "inline-block",
              marginLeft: "15px",
              fontSize: "20px",
            }}
          >
            Full Stack Developer
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="justify-content-end flex-grow-1 pe-3"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link
              href="/"
              style={{
                color: "#f0f0f0",
                fontFamily: "Lato, sans-serif",
                fontWeight: "bold",
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="/about-us"
              style={{
                color: "#f0f0f0",
                fontFamily: "Lato, sans-serif",
                fontWeight: "bold",
              }}
            >
              About
            </Nav.Link>
            <NavDropdown
              title={
                <span
                  style={{
                    color: "#FFFFFF",
                    fontFamily: "Lato, sans-serif",
                    fontWeight: "bold",
                  }}
                >
                  Link
                </span>
              }
              id="navbarScrollingDropdown"
              style={{
                color: "#FFFFFF",
                fontFamily: "Lato, sans-serif",
                fontWeight: "bold",
              }}
            >
              <NavDropdown.Item href="#action3" style={{ color: "" }}>
                Action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                href="#action5"
                style={{
                  fontFamily: "Lato, sans-serif",
                  fontWeight: "bold",
                }}
              >
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 mt-1 mb-1"
              aria-label="Search"
            />
            <Button
              style={{
                backgroundColor: isHovered ? "#ffa500" : "#ff5722",
                color: "#FFFFFF",
                padding: "5px 15px",
                textDecoration: "none",
                display: "inline-block",
                transition: "background-color 0.3s", // Optional: Add a transition for a smooth hover effect
                marginTop: "10px",
                marginBottom: "5px",
                borderColor: "#4682B4",
              }}
              onMouseOver={() => setIsHovered(true)}
              onMouseOut={() => setIsHovered(false)}
            >
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarCSS;

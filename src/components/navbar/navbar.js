import React, { useState } from "react";
import { Link } from "react-router-dom";
import Collapse from "react-bootstrap/Collapse";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./navbar.css";
import { ReactSVG } from "react-svg";
import shoppingCart from "./shopping-cart.svg";
import contactPhone from "./contact-phone.svg";
import logInItem from "./log-in.svg";
import aboutUs from "./about-us.svg";
import sneakerLogo from "./sneaker-logo.svg";
import sneakerDropdown from "./sneaker-dropdown.svg";
import bootsDropdown from "./boots-dropdown.svg";
import shoeDropdown from "./shoe-dropdown.svg";
import jacketDropdown from "./jacket-dropdown.svg";
import tshirtDropdown from "./tshirt-dropdown.svg";
import joggersDropdown from "./joggers-dropdown.svg";
import necklaceDropdown from "./necklace-dropdown.svg";
import Badge from "react-bootstrap/Badge";

function MyNavbar(props) {
  const badgeCounter = props.cartLength;
  const [linkState, setLinkState] = useState({
    cart: false,
    contact: false,
    about: false,
    login: false,
  });
  return (
    <Navbar collapseOnSelect expand="lg" className="my-navbar" variant="dark">
      <Container className="nav-container">
        <Link to="/" style={{ textDecoration: "none" }}>
          <Navbar.Brand href="#home" className="nav-brand">
            <ReactSVG src={sneakerLogo}></ReactSVG>Seank-It
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown
              title="Men's Clothing"
              id="collasible-nav-dropdown"
              className="custom-dropdown my-custom-dropdown"
            >
              <NavDropdown.Item
                href="#action/3.1"
                className="dropdown-whole-item"
              >
                <span className="dropdown-span-item">Sneakers</span>
                <ReactSVG src={sneakerDropdown} className="my-svg"></ReactSVG>
              </NavDropdown.Item>

              <NavDropdown.Item
                href="#action/3.2"
                className="dropdown-whole-item"
              >
                <span className="dropdown-span-item">Boots</span>
                <ReactSVG src={bootsDropdown} className="my-svg"></ReactSVG>
              </NavDropdown.Item>
              <NavDropdown.Item
                href="#action/3.3"
                className="dropdown-whole-item"
              >
                <span className="dropdown-span-item">Casual</span>
                <ReactSVG src={shoeDropdown} className="my-svg"></ReactSVG>
              </NavDropdown.Item>
              <NavDropdown.Item
                href="#action/3.3"
                className="dropdown-whole-item"
              >
                <span className="dropdown-span-item">Jackets</span>
                <ReactSVG src={jacketDropdown} className="my-svg"></ReactSVG>
              </NavDropdown.Item>
              <NavDropdown.Item
                href="#action/3.3"
                className="dropdown-whole-item"
              >
                <span className="dropdown-span-item">T-Shirts</span>
                <ReactSVG src={tshirtDropdown} className="my-svg"></ReactSVG>
              </NavDropdown.Item>
              <NavDropdown.Item
                href="#action/3.3"
                className="dropdown-whole-item"
              >
                <span className="dropdown-span-item">Joggers</span>
                <ReactSVG src={joggersDropdown} className="my-svg"></ReactSVG>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                href="#action/3.4"
                className="dropdown-whole-item"
              >
                <span className="dropdown-span-item">Accessories</span>
                <ReactSVG src={necklaceDropdown} className="my-svg"></ReactSVG>
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Women's Clothing"
              id="collasible-nav-dropdown"
              className="my-custom-dropdown"
            >
              <Link to="/womensneakers" style={{ textDecoration: "none" }}>
                <NavDropdown.Item
                  href="#action/3.1"
                  className="dropdown-whole-item"
                >
                  <span className="dropdown-span-item">Sneakers</span>
                  <ReactSVG src={sneakerDropdown} className="my-svg"></ReactSVG>
                </NavDropdown.Item>
              </Link>
              <NavDropdown.Item
                href="#action/3.2"
                className="dropdown-whole-item"
              >
                <span className="dropdown-span-item">Boots</span>
                <ReactSVG src={bootsDropdown} className="my-svg"></ReactSVG>
              </NavDropdown.Item>
              <NavDropdown.Item
                href="#action/3.3"
                className="dropdown-whole-item"
              >
                <span className="dropdown-span-item">Casual</span>
                <ReactSVG src={shoeDropdown} className="my-svg"></ReactSVG>
              </NavDropdown.Item>
              <NavDropdown.Item
                href="#action/3.3"
                className="dropdown-whole-item"
              >
                <span className="dropdown-span-item">Jackets</span>
                <ReactSVG src={jacketDropdown} className="my-svg"></ReactSVG>
              </NavDropdown.Item>
              <NavDropdown.Item
                href="#action/3.3"
                className="dropdown-whole-item"
              >
                <span className="dropdown-span-item">T-Shirts</span>
                <ReactSVG src={tshirtDropdown} className="my-svg"></ReactSVG>
              </NavDropdown.Item>
              <NavDropdown.Item
                href="#action/3.3"
                className="dropdown-whole-item"
              >
                <span className="dropdown-span-item">Joggers</span>
                <ReactSVG src={joggersDropdown} className="my-svg"></ReactSVG>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                href="#action/3.4"
                className="dropdown-whole-item"
              >
                <span className="dropdown-span-item">Accessories</span>
                <ReactSVG src={necklaceDropdown} className="my-svg"></ReactSVG>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search for an item..."
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success" className="search-button">
              Search
            </Button>
          </Form>
          <Nav>
            <Link to="/shoppingcart" style={{ textDecoration: "none" }}>
              <Nav.Link
                href="#cart"
                className="nav-link-custom-class"
                onMouseEnter={() => setLinkState({ ...linkState, cart: true })}
                onMouseLeave={() => setLinkState({ ...linkState, cart: false })}
                aria-controls="example-collapse-text"
                aria-expanded={linkState.cart}
              >
                <Badge pill bg="danger">
                  {badgeCounter}
                </Badge>{" "}
                <ReactSVG src={shoppingCart}></ReactSVG>
                <Collapse in={linkState.cart}>
                  <span className="custom-span">Shopping Cart</span>
                </Collapse>
              </Nav.Link>
            </Link>
            <Nav.Link
              href="#contact"
              className="nav-link-custom-class"
              onMouseEnter={() => setLinkState({ ...linkState, contact: true })}
              onMouseLeave={() =>
                setLinkState({ ...linkState, contact: false })
              }
              aria-controls="example-collapse-text"
              aria-expanded={linkState.contact}
            >
              <ReactSVG src={contactPhone}></ReactSVG>
              <Collapse in={linkState.contact}>
                <span className="custom-span">Contact</span>
              </Collapse>
            </Nav.Link>
            <Nav.Link
              href="#about"
              className="nav-link-custom-class"
              onMouseEnter={() => setLinkState({ ...linkState, about: true })}
              onMouseLeave={() => setLinkState({ ...linkState, about: false })}
              aria-controls="example-collapse-text"
              aria-expanded={linkState.about}
            >
              <ReactSVG src={aboutUs}></ReactSVG>
              <Collapse in={linkState.about}>
                <span className="custom-span">About</span>
              </Collapse>
            </Nav.Link>
            <Nav.Link
              href="#login"
              className="nav-link-custom-class"
              onMouseEnter={() => setLinkState({ ...linkState, login: true })}
              onMouseLeave={() => setLinkState({ ...linkState, login: false })}
              aria-controls="example-collapse-text"
              aria-expanded={linkState.login}
            >
              <ReactSVG src={logInItem}></ReactSVG>
              <Collapse in={linkState.login}>
                <span className="custom-span">Log In</span>
              </Collapse>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;

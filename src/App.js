import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Darrel Baerwaldt",
      headerLinks: [
        { title: "Home", path: "/" },
        { title: "About", path: "/about" },
        { title: "Content", path: "/content" },
      ],
      home: {
        title: "Never Stop",
        subTitle: "You determine your fate.",
        text: " Checkout my projects",
      },
      about: {
        title: "About Me",
      },
      contact: {
        title: "Ask me anything",
      },
    };
  }

  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>Darrel Baerwaldt</Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ms-auto">
                <Link className="nav-link" to="/">
                  Home
                </Link>
                <Link className="nav-link" to="/about">
                  About
                </Link>
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
        {/* <App /> */}
        {/* document.getElementById("root"); */}
      </Router>
    );
  }
}

export default App;

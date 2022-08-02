import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import { Container, Nav, Navbar } from 'react-bootstrap';
import './App.css';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Darrel Baerwaldt',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Content', path: '/content' },
      ],
      home: {
        title: 'Never Stop!',
        subTitle: 'You determine your fate.',
        text: ' Checkout my projects...',
      },
      about: {
        title: 'About Me',
      },
      contact: {
        title: 'Ask me anything',
      },
    };
  }
  render() {
    // console.log(this.state);
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

          <Routes>
            <Route
              path="/"
              exact
              element={
                <HomePage
                  state={this.state}
                  title={this.state.home.title}
                  subTitle={this.state.home.subTitle}
                  text={this.state.home.text}
                />
              }
              // render={() => (
              //   <HomePage
              //     title={this.state.home.title}
              //     subTitle={this.state.home.subTitle}
              //     text={this.state.home.text}
              //   />
              // )}
            />

            <Route
              path="/about"
              exact
              element={<AboutPage title={this.state.about.title} />}
              // render={() => <AboutPage title={this.state.about.title} />}
            />

            <Route
              path="/contact"
              exact
              element={<ContactPage title={this.state.contact.title} />}
              // render={() => <ContactPage title={this.state.contact.title} />}
            />
          </Routes>
          <Footer />
        </Container>
        {/* <App /> */}
        {/* document.getElementById("root"); */}
      </Router>
    );
  }
}

export default App;

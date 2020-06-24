import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from './about/About';
import Home from './home/Home';
import icon from '../public/favicon.ico'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
  MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBCol, MDBContainer, MDBRow, MDBFooter,
  MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter 
} from "mdbreact";
class App extends Component {
  constructor(props) {
    super(props);
    this.testMethod = this.testMethod.bind(this);
  }
  state = {
    isOpen: false,
    modal: false
  };
  testMethod() {
    this.About.setState({ test: 'test' });

  }
  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <MDBNavbar color="blue" dark expand="md">
              <MDBNavbarBrand>
                <strong className="white-text">Firmwide Fiduciary Inventory</strong>
              </MDBNavbarBrand>
              <MDBNavbarToggler onClick={this.toggleCollapse} />
              <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                <MDBNavbarNav left>
                  <MDBNavItem>
                    <MDBNavLink to="/home">Home</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="/about">About</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBDropdown>
                      <MDBDropdownToggle nav caret>
                        <span className="mr-2">Filter By</span>
                      </MDBDropdownToggle>
                      <MDBDropdownMenu>
                        <MDBDropdownItem href="#!">ID</MDBDropdownItem>
                        <MDBDropdownItem href="#!">Line Of Business</MDBDropdownItem>
                        <MDBDropdownItem href="#!">Sub Line Of Business</MDBDropdownItem>
                        <MDBDropdownItem href="#!">Inventory Name</MDBDropdownItem>
                      </MDBDropdownMenu>
                    </MDBDropdown>
                  </MDBNavItem>
                </MDBNavbarNav>
                <MDBNavbarNav right>
                  <MDBNavItem>
                    <MDBFormInline waves>
                      <div className="md-form my-0">
                        <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                      </div>
                    </MDBFormInline>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
            <Home></Home>

            <MDBContainer >
              <MDBBtn color="blue" onClick={this.toggle}>Add Inventory</MDBBtn>
              <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
                <MDBModalHeader toggle={this.toggle}>Add Inventory</MDBModalHeader>
                <MDBModalBody>
                  Add Not Available At This Time
                    </MDBModalBody>
                <MDBModalFooter>
                  <MDBBtn color="blue" onClick={this.toggle}>Close</MDBBtn>
                </MDBModalFooter>
              </MDBModal>

              <MDBBtn color="blue" onClick={this.toggle}>Edit Inventory</MDBBtn>
              <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
                <MDBModalHeader toggle={this.toggle}>Edit Inventory</MDBModalHeader>
                <MDBModalBody>
                  Edit Not Available At This Time
                    </MDBModalBody>
                <MDBModalFooter>
                  <MDBBtn color="blue" onClick={this.toggle}>Close</MDBBtn>
                </MDBModalFooter>
              </MDBModal>
            </MDBContainer>

          </div>
        </Router>
        <div style={{ position: 'absolute', left: '0', bottom: '0', right: '0' }}>
          <MDBFooter color="blue" className="font-small pt-4 mt-4">
            <MDBContainer fluid className="text-center text-md-left">
              <MDBRow>
                <MDBCol md="5">
                  <h5 className="title">Note:</h5>
                  <p>
                    The 'Active' view represents a live working draft and is subject to change. For the lastest published inventory, please refer
                    to Fiduciary and Conflict of Interest Homepage via the links.
                  </p>
                </MDBCol>
                <MDBCol md="6">
                  <h5 className="title">Links</h5>
                  <a href="https://www.youtube.com/c/jamesqquick" className="youtube social">
                    <FontAwesomeIcon icon={faYoutube} size="2x" />
                  </a>
                  <a href="https://www.facebook.com/learnbuildteach/"
                    className="facebook social">
                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                  </a>
                  <a href="https://www.twitter.com/jamesqquick" className="twitter social">
                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                  </a>
                  <a href="https://www.instagram.com/learnbuildteach"
                    className="instagram social">
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                  </a>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
            <div className="footer-copyright text-center py-3">
              <MDBContainer fluid>
              </MDBContainer>
            </div>
          </MDBFooter>
        </div>
      </div>
    );
  }
}

export default App;

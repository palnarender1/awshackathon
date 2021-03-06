import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from './about/About';
import Home from './home/Home';
import Filter from './filter/Filter';
import icon from '../public/favicon.ico'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from 'axios';
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
    this.state = { 
      isOpen: false,
      modal: false,
      inventory:{ id:0,name:'tesfsf',desc:'fasfadf',lob:null,sublob:null},
      loggedInUser: null

    };
    axios.get("https://tzy6yq8waf.execute-api.us-east-1.amazonaws.com/default/hachathon_lambda_dynamoDB_fetchall")
    .then(resp => {
        console.log("Logged in user>>" ,resp.data);
        this.setState({ 'loggedInUser': resp.data[0].firstName + " " +
        resp.data[0].lastName })
      });
    this.addInventory = this.addInventory.bind(this);
    this.updateName = this.updateName.bind(this);
    this.updateSubLob = this.updateSubLob.bind(this);
    this.updateLob = this.updateLob.bind(this);
    this.updateDesc = this.updateDesc.bind(this);
    this.homeModal = null;
    this.openEditModal = this.openEditModal.bind(this);
  }
  addInventory(){
    axios.post(" https://cl5f1o14w3.execute-api.us-east-2.amazonaws.com/ffistage",this.state.inventory).then(resp=>{
      console.log('Record Added Successfully',resp);
      this.homeModal.updateGrid();
    });
    this.setState({ modal: false });

  }

  openEditModal(record){
    this.setState({inventory:record});
    this.setState({ modal: true });
    
  }

  deleteInventory(record){
    alert("delete record "+ record.id);
    axios.get("https://8pjln5f1hj.execute-api.us-east-1.amazonaws.com/manage?id="+record.id,this.state.inventory).then(resp=>{
      console.log('Inventory deleted Successfully',resp);
      this.homeModal.updateGrid();
    });
    this.setState({ modal: false });

  }

  updateName(event){
    this.setState({inventory: {...this.state.inventory, name:event.target.value}});
  }
  updateLob(event){
    this.setState({inventory: {...this.state.inventory, lob:event.target.value}});
  }
  updateSubLob(event){
    this.setState({inventory: {...this.state.inventory, sublob:event.target.value}});
  }
  updateDesc(event){
    this.setState({inventory: {...this.state.inventory, desc:event.target.value}});
  }

 
  testMethod() {
    this.About.setState({ test: 'test' });

  }
  toggle = () => {
    this.setState({inventory:{ id:0,name:null,desc:null,lob:null,sublob:null}});
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
          <div style={{ marginBottom: '100px' }}>
            <MDBNavbar color="blue" dark expand="md">
              <MDBNavbarBrand>
                <strong className="white-text">Firmwide Inventory</strong>
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
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <strong className="text-md-right white-text"> 
                        {this.state.loggedInUser} </strong>
                      </div>
                    </MDBFormInline>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
            <Filter> </Filter>
            <Home ref={(homeModal)=>{
             
              this.homeModal = homeModal;
              console.log('HOME MODAL',this.homeModal);
            }} openEditModal={this.openEditModal}></Home>

            <MDBContainer >
          <MDBBtn color="blue" size="sm"  onClick={this.toggle}> ADD Inventory</MDBBtn>
              <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
                <MDBModalHeader toggle={this.toggle}>{ (this.state.inventory.id ===0)? 'ADD Inventory' : 'Edit Inventory ' + this.state.inventory.id}</MDBModalHeader>
                <MDBModalBody>
                  <table><tr><td style={{textAlign: 'left'}}>Name:</td><td><input type="text" value={this.state.inventory.name}  onChange={this.updateName}/></td></tr>
                  <tr><td style={{textAlign: 'left'}}>Description:</td><td><input type="text" value={this.state.inventory.desc}  onChange={this.updateDesc}/></td></tr>
                  <tr><td style={{textAlign: 'left'}}>LOB</td><td><input type="text" value={this.state.inventory.lob}  onChange={this.updateLob}/></td></tr>
                  <tr><td style={{textAlign: 'left'}}>SUBLOB</td><td><input type="text" value={this.state.inventory.sublob}  onChange={this.updateSubLob}/></td></tr>
                  </table>
                    </MDBModalBody>
                <MDBModalFooter>
                 <MDBBtn color="blue" onClick={this.addInventory}>Save</MDBBtn>
                 <MDBBtn color="blue" onClick={this.toggle}>Close</MDBBtn>
                </MDBModalFooter>
              </MDBModal>
            </MDBContainer>

          </div>
        </Router>
        <div style={{ position: 'fixed', left: '0', bottom: '0', right: '0' }}>
          <MDBFooter color="blue" className="font-small pt-1 mt-1">
            <MDBContainer fluid className="text-center text-md-left">
              <MDBRow>
                <MDBCol md="10">
                  <p>
                    Note: The 'Active' view represents a live working draft and is subject to change. For the lastest published inventory, please refer
                    to Firmwide Inventory Homepage via the links.
                  </p>
                </MDBCol>
                <MDBCol className="text-right" md="2">
                  
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
          </MDBFooter>
        </div>
      </div>
    );
  }
}

export default App;

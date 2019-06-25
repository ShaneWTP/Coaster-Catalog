import React, { Component } from "react";
import LogoHover from "./logo-hover.png"
import logo from "./cc-logo-2.png"
import API from "../../utils/API";
import "./style.css";
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
  MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon
} from "mdbreact";

class Navbar extends Component {
  constructor() {
    super()
    this.state = {
      isOpen: false,
    };
    this.handleSignoutSubmit = this.handleSignoutSubmit.bind(this);
  }

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  handleSignoutSubmit(event) {
    event.preventDefault();
    console.log('handleSignoutSubmit');

    API.signout().then(response => {
      console.log(response);
      if (!response.data.error) {

        console.log('youre good');
        // update App.js state to show user as signedout
        this.props.updateUser({
          loggedIn: false,
          username: null
        });
        console.log('updated user for signout');
        // Maybe we can reset user to null?
        this.props.updateUser({ user: null });

      } else {
        console.log('Error: ' + response.data.error);
      }

    }).catch(error => {
      console.log('logout error: ' + error);
    })
  }

  render() {
    return (
      <MDBNavbar color="green darken-3" dark expand="md">
        <MDBNavbarBrand>
          <MDBNavLink to="/">
              <div className="logo-container">
                <img src={logo} width="550" height="85" className="d-inline-block align-top" alt="logo" />
                <div className="overlay">
                  <a href="/" className="image">
                    <img src={LogoHover} width="550" height="85" className="d-inline-block align-top" alt="logo-hover" />
                  </a>
                </div>
              </div>
          </MDBNavLink>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem className="parks">
              <MDBDropdown>
                <MDBDropdownToggle nav caret class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <div className="d-none d-md-inline">Parks &amp; Coasters</div>
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default" aria-labelledby="dropdownMenuButton">
                  <div class="row p-3 drop-down-card">
                    <div class="col-4">
                      <span>Camelback Mountain Adventures</span>
                      <MDBDropdownItem href="#!">Coaster 1</MDBDropdownItem>
                      <MDBDropdownItem href="#!">Coaster 1</MDBDropdownItem>
                      <MDBDropdownItem href="#!">Coaster 1</MDBDropdownItem>
                      <span>Conneaut Lake Park</span>
                      <MDBDropdownItem href="#!">Coaster 1</MDBDropdownItem>
                      <MDBDropdownItem href="#!">Coaster 1</MDBDropdownItem>
                      <MDBDropdownItem href="#!">Coaster 1</MDBDropdownItem>
                      <span>DelGrosso's Amusement Park</span>
                      <MDBDropdownItem href="#!">Coaster 1</MDBDropdownItem>
                      <MDBDropdownItem href="#!">Coaster 1</MDBDropdownItem>
                      <MDBDropdownItem href="#!">Coaster 1</MDBDropdownItem>
                      <span>Dorney Park and Wildwater Kingdom</span>
                      <MDBDropdownItem href="#!">Coaster 1</MDBDropdownItem>
                      <MDBDropdownItem href="#!">Coaster 1</MDBDropdownItem>
                      <MDBDropdownItem href="#!">Coaster 1</MDBDropdownItem>
                      <span>Dutch Wonderland</span>
                      <MDBDropdownItem href="#!">Coaster 1</MDBDropdownItem>
                      <MDBDropdownItem href="#!">Coaster 1</MDBDropdownItem>
                      <MDBDropdownItem href="#!">Coaster 1</MDBDropdownItem>
                    </div>            
                    <div class="col-4">
                      <span>Fun Fore All Family Entertainment Center</span>
                      <MDBDropdownItem href="#!">Coaster 1</MDBDropdownItem>
                      <MDBDropdownItem href="#!">Coaster 1</MDBDropdownItem>
                      <MDBDropdownItem href="#!">Coaster 1</MDBDropdownItem>
                      <span>Hersheypark</span>
                      <MDBDropdownItem href="#!">Coaster 1</MDBDropdownItem>
                      <MDBDropdownItem href="#!">Coaster 1</MDBDropdownItem>
                      <MDBDropdownItem href="#!">Coaster 1</MDBDropdownItem>
                      <span>Idlewild and SoakZone</span>
                      <MDBDropdownItem href="#!">Coaster 1</MDBDropdownItem>
                      <MDBDropdownItem href="#!">Coaster 1</MDBDropdownItem>
                      <MDBDropdownItem href="#!">Coaster 1</MDBDropdownItem>
                      <span>Kennywood</span>
                      <MDBDropdownItem href="#!">Coaster 1</MDBDropdownItem>
                      <MDBDropdownItem href="#!">Coaster 1</MDBDropdownItem>
                      <MDBDropdownItem href="#!">Coaster 1</MDBDropdownItem>
                      <span>Knoebels Amusement Park and Resort</span>
                      <MDBDropdownItem href="#!">Coaster 1</MDBDropdownItem>
                      <MDBDropdownItem href="#!">Coaster 1</MDBDropdownItem>
                      <MDBDropdownItem href="#!">Coaster 1</MDBDropdownItem>
                    </div>
                    <div class="col-4">
                      <span>Lakemont Park</span>
                      <MDBDropdownItem href="#!">Coaster 1</MDBDropdownItem>
                      <MDBDropdownItem href="#!">Coaster 1</MDBDropdownItem>
                      <MDBDropdownItem href="#!">Coaster 1</MDBDropdownItem>
                      <span>Sesame Place</span>
                      <MDBDropdownItem href="#!">Coaster 1</MDBDropdownItem>
                      <MDBDropdownItem href="#!">Coaster 1</MDBDropdownItem>
                      <MDBDropdownItem href="#!">Coaster 1</MDBDropdownItem>
                      <span>Waldameer</span>
                      <MDBDropdownItem href="#!">Coaster 1</MDBDropdownItem>
                      <MDBDropdownItem href="#!">Coaster 1</MDBDropdownItem>
                      <MDBDropdownItem href="#!">Coaster 1</MDBDropdownItem>
                    </div>
                  </div>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem> 
            <MDBNavItem className="profile">
              <MDBNavLink to="/userprofile">Profile</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem className="d-none d-md-inline cause">
              <MDBNavLink to="/cause">Coasters for a Cause</MDBNavLink>
            </MDBNavItem>
            {/* <MDBNavItem>
              <div> WELCOME {this.props.username} !</div>
            </MDBNavItem> */}
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem className="sign-in">
              <MDBDropdown dropleft>
                <MDBDropdownToggle nav caret>
                  <MDBIcon className="nav-icon" icon="user" />
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                  <MDBDropdownItem href="/signin">Sign In</MDBDropdownItem>
                  <MDBDropdownItem href="#!" onClick={this.handleSignoutSubmit}>Sign Out</MDBDropdownItem>
                  <MDBDropdownItem href="/signup">Create a Profile</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default Navbar;
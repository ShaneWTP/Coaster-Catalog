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
                <MDBDropdownToggle nav caret>
                  <div className="d-none d-md-inline">Parks</div>
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                  <MDBDropdownItem href="#!">Camelback Mountain Adventures</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Conneaut Lake Park</MDBDropdownItem>
                  <MDBDropdownItem href="#!">DelGrosso's Amusement Park</MDBDropdownItem>
                  <MDBDropdownItem href="/dorney">Dorney Park and Wildwater Kingdom</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Dutch Wonderland</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Fun Fore All Family Entertainment Center</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Hersheypark</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Idlewild and SoakZone</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Kennywood</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Knoebels Amusement Park and Resort</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Lakemont Park</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Sesame Place</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Waldameer</MDBDropdownItem>
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
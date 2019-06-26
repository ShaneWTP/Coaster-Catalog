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
              <img src={logo} width="400" height="60" className="d-inline-block align-top" alt="logo" />
              <div className="overlay">
                <a href="/" className="image">
                  <img src={LogoHover} width="400" height="60" className="d-inline-block align-top" alt="logo-hover" />
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
                <MDBDropdownToggle nav caret className="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <div className="d-none d-md-inline">Parks &amp; Coasters</div>
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default" aria-labelledby="dropdownMenuButton">
                  <div className="row p-3 drop-down-card">
                    <div className="col-4">
                      <span className="park-name">Camelback Mountain Adventures</span>
                      <MDBDropdownItem href="/coasters/5d0aae19c64c9f1682257e1a">Appalachian Express Mountian Coaster</MDBDropdownItem>
                      <span className="park-name">Conneaut Lake Park</span>
                      <MDBDropdownItem href="/coasters/5d0aae19c64c9f1682257e04">Blue Streak</MDBDropdownItem>
                      <MDBDropdownItem href="/coasters/5d0aae19c64c9f1682257e09">Devil's Den</MDBDropdownItem>
                      <MDBDropdownItem href="/coasters/5d0aae19c64c9f1682257e17">Little Dipper</MDBDropdownItem>
                      <span className="park-name">DelGrosso's Amusement Park</span>
                      <MDBDropdownItem href="/coasters/5d0aae19c64c9f1682257e08">Crazy Mouse</MDBDropdownItem>
                      <MDBDropdownItem href="/coasters/5d0aae19c64c9f1682257e29">Wacky Worm</MDBDropdownItem>
                      <span className="park-name">Dorney Park and Wildwater Kingdom</span>
                      <MDBDropdownItem href="/coasters/5d0aae19c64c9f1682257dfc">Hydra The Revenge</MDBDropdownItem>
                      <MDBDropdownItem href="/coasters/5d0aae19c64c9f1682257dfd">Possessed</MDBDropdownItem>
                      <MDBDropdownItem href="/coasters/5d0aae19c64c9f1682257dfe">Steel Force</MDBDropdownItem>
                      <MDBDropdownItem href="/coasters/5d0aae19c64c9f1682257e23">Talon</MDBDropdownItem>
                      <MDBDropdownItem href="/coasters/5d0aae19c64c9f1682257e25">Thunderhawk</MDBDropdownItem>
                      <MDBDropdownItem href="/coasters/5d0aae19c64c9f1682257e2d">Wild Mouse</MDBDropdownItem>
                      <MDBDropdownItem href="/coasters/5d0aae19c64c9f1682257e2e">Woodstock's Express</MDBDropdownItem>
                      <span className="park-name">Dutch Wonderland</span>
                      <MDBDropdownItem href="/coasters/5d0aae19c64c9f1682257e10">Joust</MDBDropdownItem>
                      <MDBDropdownItem href="/coasters/5d0aae19c64c9f1682257e11">Kingdom Coaster</MDBDropdownItem>
                      <MDBDropdownItem href="/coasters/5d0aae19c64c9f1682257e19">Merlin's Mayhem</MDBDropdownItem>
                      <span className="park-name">Fun Fore All Family Entertainment</span>
                      <MDBDropdownItem href="/coasters/5d0aae19c64c9f1682257e0c">Fiesta Express</MDBDropdownItem>
                    </div>
                    <div class="col-4">
                      <span className="park-name">Hersheypark</span>
                      <MDBDropdownItem href="/coasters/5d0aae19c64c9f1682257e06">Cocoa Cruiser</MDBDropdownItem>
                      <MDBDropdownItem href="/coasters/5d0aae19c64c9f1682257e05">Comet</MDBDropdownItem>
                      <MDBDropdownItem href="/coasters/5d0aae19c64c9f1682257e0b">Fahrenheit</MDBDropdownItem>
                      <MDBDropdownItem href="/coasters/5d0aae19c64c9f1682257e0e">Great Bear</MDBDropdownItem>
                      <MDBDropdownItem href="/coasters/5d0aae19c64c9f1682257e14">Laff Trakk</MDBDropdownItem>
                      <MDBDropdownItem href="/coasters/5d0aae19c64c9f1682257e15">Lightning Racer</MDBDropdownItem>
                      <MDBDropdownItem href="/coasters/5d0aae19c64c9f1682257dfb">Sidewinder</MDBDropdownItem>
                      <MDBDropdownItem href="/coasters/5d0aae19c64c9f1682257df9">Skyrush</MDBDropdownItem>
                      <MDBDropdownItem href="/coasters/5d0aae19c64c9f1682257e21">SooperDooperLooper</MDBDropdownItem>
                      <MDBDropdownItem href="/coasters/5d0aae19c64c9f1682257dfa">Storm Runner</MDBDropdownItem>
                      <MDBDropdownItem href="/coasters/5d0aae19c64c9f1682257e26">Trailblazer</MDBDropdownItem>
                      <MDBDropdownItem href="/coasters/5d0aae19c64c9f1682257e2a">Wildcat</MDBDropdownItem>
                      <MDBDropdownItem href="/coasters/5d0aae19c64c9f1682257e2c">Wild Mouse</MDBDropdownItem>
                      <span className="park-name">Idlewild and SoakZone</span>
                      <MDBDropdownItem href="/coasters/5d0aae19c64c9f1682257e20">Rollo Coaster</MDBDropdownItem>
                      <MDBDropdownItem href="/coaster/5d0aae19c64c9f1682257e2b">Wild Mouse</MDBDropdownItem>
                      <span className="park-name">Kennywood</span>
                      <MDBDropdownItem href="/coasters/5d0aae19c64c9f1682257e0a">Exterminator</MDBDropdownItem>
                      <MDBDropdownItem href="/coasters/5d0aae19c64c9f1682257dff">Jack Rabbit</MDBDropdownItem>
                      <MDBDropdownItem href="/coasters/5d0aae19c64c9f1682257e16">Lil' Phantom</MDBDropdownItem>
                      <MDBDropdownItem href="/coasters/5d0aae19c64c9f1682257e1c">Phantom's Revenge</MDBDropdownItem>
                    </div>
                    <div className="col-4">
                      <MDBDropdownItem href="/coasters/5d0aae19c64c9f1682257e00">Racer</MDBDropdownItem>
                      <MDBDropdownItem href="/coasters/5d0aae19c64c9f1682257e01">Sky Rocket</MDBDropdownItem>
                      <MDBDropdownItem href="/coasters/5d0aae19c64c9f1682257e02">Steel Curtain</MDBDropdownItem>
                      <MDBDropdownItem href="/coasters/5d0aae19c64c9f1682257e24">Thunderbolt</MDBDropdownItem>
                      <span className="park-name">Knoebels Amusement Park</span>
                      <MDBDropdownItem href="/coasters/5d0aae19c64c9f1682257e03">Black Diamond</MDBDropdownItem>
                      <MDBDropdownItem href="/coasters/5d0aae19c64c9f1682257e0d">Flying Turns</MDBDropdownItem>
                      <MDBDropdownItem href="/coasters/5d0aae19c64c9f1682257e0f">Impulse</MDBDropdownItem>
                      <MDBDropdownItem href="/coasters/5d0aae19c64c9f1682257e12">Kozmo's Kurves</MDBDropdownItem>
                      <MDBDropdownItem href="/coasters/5d0aae19c64c9f1682257e1d">Phoenix</MDBDropdownItem>
                      <MDBDropdownItem href="/coasters/5d0aae19c64c9f1682257e27">Twister</MDBDropdownItem>
                      <span className="park-name">Lakemont Park</span>
                      <MDBDropdownItem href="/coasters/5d0aae19c64c9f1682257e13">Leap-The-Dips</MDBDropdownItem>
                      <MDBDropdownItem href="/coasters/5d0aae19c64c9f1682257e18">Little Leaper</MDBDropdownItem>
                      <span className="park-name">Sesame Place</span>
                      <MDBDropdownItem href="/coasters/5d0aae19c64c9f1682257e1b">Oscar's Wacky Taxi</MDBDropdownItem>
                      <MDBDropdownItem href="/coasters/5d0aae19c64c9f1682257e28">Vapor Trail</MDBDropdownItem>
                      <span className="park-name">Waldameer</span>
                      <MDBDropdownItem href="/coasters/5d0aae19c64c9f1682257e07">Comet</MDBDropdownItem>
                      <MDBDropdownItem href="/coasters/5d0aae19c64c9f1682257e1f">Ravine Flyer II</MDBDropdownItem>
                      <MDBDropdownItem href="/coasters/5d0aae19c64c9f1682257e1e">Ravinie Flyer III</MDBDropdownItem>
                      <MDBDropdownItem href="/coasters/5d0aae19c64c9f1682257e22">Steel Dragon</MDBDropdownItem>
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
                <MDBDropdownMenu className="dropdown-default right-menu">
                  <MDBDropdownItem className="right-menu-item" href="/signin">Sign In</MDBDropdownItem>
                  <MDBDropdownItem className="right-menu-item" href="#!" onClick={this.handleSignoutSubmit}>Sign Out</MDBDropdownItem>
                  <MDBDropdownItem className="right-menu-item" href="/signup">Create a Profile</MDBDropdownItem>
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
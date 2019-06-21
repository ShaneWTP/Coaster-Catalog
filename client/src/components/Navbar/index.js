import React, { Component } from "react";
import logo from "./logo.png"
import "./style.css";
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
    MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon
} from "mdbreact";

class Navbar extends Component {
    state = {
        isOpen: false
    };

    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        return (
            <MDBNavbar color="green darken-3" dark expand="md">
                <MDBNavbarBrand>
                    <MDBNavLink to="/"><img src={logo} width="550" height="125" class="d-inline-block align-top" alt="logo" /></MDBNavLink>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={this.toggleCollapse} />
                <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                    <MDBNavbarNav left>
                        <MDBNavItem>
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
                        <MDBNavItem>
                            <MDBNavLink to="/profile">Profile</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink to="cause">Coasters for a Cause</MDBNavLink>
                        </MDBNavItem>
                    </MDBNavbarNav>
                    <MDBNavbarNav right>
                        <MDBNavItem>
                            <MDBDropdown dropleft>
                                <MDBDropdownToggle nav caret>
                                    <MDBIcon className="nav-icon" icon="user" />
                                </MDBDropdownToggle>
                                <MDBDropdownMenu className="dropdown-default">
                                    <MDBDropdownItem href="/signin">Sign In</MDBDropdownItem>
                                    <MDBDropdownItem href="#!">Sign Out</MDBDropdownItem>
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
import React from "react";
import "./style.css";
import logo from "./logo.png";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand" href="#">
                <img src={logo} alt="logo" />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="/profile">Profile</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/cause">Coasters for a Cause</a>
                    </li>
                </ul>
            </div>
            <button className="btn btn-success my-2 my-sm-0" type="submit">Sign Out</button>
        </nav>
    )
}

export default Navbar;
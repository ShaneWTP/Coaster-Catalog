import React, { Component } from "react";
import "./style.css";

class NavbarTop extends Component {

  render() {
    return (
      <div  className="welcome">
        <div className="row">
          <div className="col l12">
            <div> WELCOME {this.props.username} !</div>
          </div>
        </div>
      </div>
    );
  }
}

export default NavbarTop;
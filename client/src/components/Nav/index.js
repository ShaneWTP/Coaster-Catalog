import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

class Nav extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isExpanded: false
      };
    }
    handleToggle(e) {
      e.preventDefault();
      this.setState({
        isExpanded: !this.state.isExpanded
      });
    }
    render() {
      const { isExpanded } = this.state;
  
      return (
        <Navigation>
          <div className="logo">
            <Link to="/">
              <p>Coaster Catalog</p>
            </Link>
          </div>
          <nav className="nav">
            <i
              className="fa fa-bars"
              aria-hidden="true"
              onClick={e => this.handleToggle(e)}
            />
            <ul className={`collapsed ${isExpanded ? "is-expanded" : ""}`}>
              <NavLink activeClassName="active" to="/">
                <li>Parks</li>
              </NavLink>
              <NavLink activeClassName="active" to="/profile">
                <li>Profile</li>
              </NavLink>
              <NavLink activeClassName="active" to="/cause">
                <li>Coasters for a Cause</li>
              </NavLink>
            </ul>
          </nav>
        </Navigation>
      );
    }
  }
  
  export default Nav;



import React from "react";
import "./style.css";

// eslint-disable-next-line
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row footer-row">
          <div className="col l4 s12">
            <h5 className>About Us</h5>
            <p>Our Team creates fun, interactive roller coaster catalogs. Our goal is to provide roller coaster enthusiasts with on-the-ground, real-world coaster information so they can confidently choose their next great thrill-ride and know what to expect when they get there.</p>
          </div>
          <div className="col l4 s12 middle">
            <h5 className>COASTER CATALOG™</h5>
            <img src="https://raw.githubusercontent.com/ShaneWTP/Coaster-Catalog/master/client/public/images/footer-logo.gif" width="290px" alt="logo animate"></img>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5>Created with ♥ by The Four Loops</h5>
            <ul>
              <li><a className="footer-text" href="https://github.com/savycodr"><i className="fab fa-github"></i> Heather Samsel</a></li>
              <li><a className="footer-text" href="https://github.com/jenerationx"><i className="fab fa-github"></i> Jenny Sterlein</a></li>
              <li><a className="footer-text" href="https://github.com/ShaneWTP"><i className="fab fa-github"></i> Shane Maziekien</a></li>
              <li><a className="footer-text" href="https://github.com/swissfink"><i className="fab fa-github"></i> Richard Fink</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">© 2019 Copyright The Four Loops. All rights revserved.</div>
      </div>
    </footer>
  );
}

export default Footer;







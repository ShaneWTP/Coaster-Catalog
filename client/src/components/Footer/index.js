import React from "react";
import "./style.css";

// eslint-disable-next-line
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row footer-row">
          <div className="col l4 s12">
            <h5 className>About COASTER CATALOG™</h5>
            <p>Our Team creates interative roller coaster catalogs that provide roller coaster enthusiasts with the best on-the-ground, real-world information so they can choose what their next great thrill-ride is going to be and what to expect when they get there</p>
          </div>
          <div className="col l4 s12">
            <h5 className>Coaster Catalog™</h5>
            <p>Coaster Catalog™ provides roller coaster enthusiasts with the best on-the-ground, real-world information so they can choose what their next great thrill-ride is going to be and what to expect when they get there</p>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5>Created with ♥ by The Four Loops</h5>
            <ul>
              <li><a className="footer-text" href="https://github.com/savycodr"><i class="fab fa-github"></i> Heather Samsel</a></li>
              <li><a className="footer-text" href="https://github.com/jenerationx"><i class="fab fa-github"></i> Jenny Sterlein</a></li>
              <li><a className="footer-text" href="https://github.com/ShaneWTP"><i class="fab fa-github"></i> Shane Maziekien</a></li>
              <li><a className="footer-text" href="https://github.com/swissfink"><i class="fab fa-github"></i> Richard Fink</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">© 2019 Copyright The Four Loops</div>
      </div>
    </footer>
  );
}

export default Footer;







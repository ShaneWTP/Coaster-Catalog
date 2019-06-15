import React from "react";
import "./style.css";

// eslint-disable-next-line
function Footer() {
  return (
    <footer className="footer">
      <div className="bottom">
        {/* eslint-disable-next-line react/jsx-no-target-blank */}
        Coaster Catalog <i className="fab fa-react"></i> &nbsp;  &copy; copyright 2019 <a href="#" target="_blank" className="footer-text">The Four Loops</a>. All rights reserved. <a href="#" target="_blank" className="footer-text"> See the project repo <i className="fas fa-external-link-alt">.</i></a> 
      </div>  
    </footer>
  );
}

export default Footer;







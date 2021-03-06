import React, { Component } from 'react';
import "./style.css";


class Jumbotron extends Component {

  render() {
    return (
      <div className="jumbotron">
        <div className="overlay"></div>
        <iframe
          src="https://www.youtube.com/embed/hR5MTRQL2vg?autoplay=1&amp;start=59&amp;controls=0&amp;modestbranding=1&amp;autohide=1&amp;showinfo=0&amp;loop=1&amp;list=PLjVLWBejGa2bTRh0LfR_TFx0NL9khGg4P&amp;mute=1"
          allow="accelerometer; autoplay; gyroscope;"
          frameBorder="0"
          title="wheeee"
        />
        <div className="container h-100 jumbocontainer">
          <div className="d-flex h-100 text-center align-items-center">
            <div className="w-100 col-sm-12 text-white">
              <h1 className="display-3 font-weight-bold my-auto jumbo-text">COASTER CATALOG (PA)</h1>
              <h2 className="jumbo-text">Pennsylvania's premier roller coaster index</h2>
              <br/>
              {this.props.user ?  "" : <div><a href="/signup">
                <button className="signup btn m-2">
                  Create a Profile</button></a>
              <a href="/signin">
                <button className="signin btn m-2">
                  Sign In</button>
              </a> </div>}
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Jumbotron;
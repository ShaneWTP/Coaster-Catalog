import React, { Component } from "react";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";
import MapPA from "../components/MapPA";
import CoasterCard from "../components/CoasterCard";
import Pagination from "../components/Pagination";

class Home extends Component {
  constructor() {
    super()
    this.state = {
      coasters: [],
      currentPage: 1,
      coastersPerPage: 5
    }

    this.componentDidMount = this.componentDidMount.bind(this)
  }

  // On mount, check that there is a user in the session
  componentDidMount() {
    API.getCoasters()
      .then(res => this.setState({ coasters: res.data }))
      .catch(err => console.log(err))

    const script = document.createElement("script");

    script.src = "/map-assets/map-interact.js";
    script.async = true;

    document.body.appendChild(script);
  }

  render() {
    // PAGINATION
    const indexOfLastCoaster = this.state.currentPage * this.state.coastersPerPage
    const indexOfFirstCoaster = indexOfLastCoaster - this.state.coastersPerPage
    const currentCoasters = this.state.coasters.slice(indexOfFirstCoaster, indexOfLastCoaster)

    const paginate = (pageNumber) => this.setState({ currentPage: pageNumber })

    return (
      <div className="home">
        <Jumbotron user={this.props.user} />
        <div className="container">
          <MapPA />
        </div>
        <br />
        <div className="row">
          <div className="col l12 s12" id="map-title">
            <h3>Roller Coaster Index</h3>
            <br />
            <p>Page through the list for information about all of the roller coasters in Pennsylvania. <br />Click on a Coaster's image to go to the Coaster's Profile page for even more information about the coaster's origin and stats.</p>
            <br />
          </div>
        </div >
        <div className="container">
          <CoasterCard coasters={currentCoasters} handleNewCoasterSubmit={this.props.handleNewCoasterSubmit} />
        </div>
        <div className="mx-auto">
          <Pagination
            coastersPerPage={this.state.coastersPerPage}
            totalCoasters={this.state.coasters.length}
            paginate={paginate}
          />
        </div>
      </div>
    );
  }
}

export default Home;
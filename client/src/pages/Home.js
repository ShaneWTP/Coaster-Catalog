import React, { Component } from "react";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";
// import Wrapper from "../components/Wrapper";
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
        <Jumbotron />
        <MapPA />
        <CoasterCard coasters={currentCoasters} />
        <Pagination
          coastersPerPage={this.state.coastersPerPage}
          totalCoasters={this.state.coasters.length}
          paginate={paginate}
        />
      </div>
    );
  }
}

export default Home;
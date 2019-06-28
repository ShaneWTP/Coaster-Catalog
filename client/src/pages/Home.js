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
    this.handleAddCoaster = this.handleAddCoaster.bind(this)

  }

  // On mount, check that there is a user in the session
  componentDidMount() {

    // Get all the coasters from the database
    API.getCoasters()
      // .then(res => this.setState({ coasters: res.data }))
      .then(res => {
        let allCoasters = res.data;

        // Make an array of coaster ids from the user's coasters
        let userCoasterIds = [];

        // if there is a user
        if (this.props.user) {
          // get all the coasters that the user has ridden
          for (let i = 0; i < this.props.user.coasters.length; i++) {
            userCoasterIds[i] = this.props.user.coasters[i].coaster._id;
          }
          // run through all the coasters and add the toggleButton attribute
          allCoasters.map(coaster => {

            // default for a user is to show the button
            let buttonToggle = true;
            // if coaster exists in the users coasters turn off the button
            if ((userCoasterIds).includes(coaster._id)) {
              buttonToggle = false
            }
            // add a new attribute to the coaster BTW - I LOVE JAVASCRIPT
            coaster.buttonToggle = buttonToggle;
            return coaster;
          });
        } else {
          // there is no user so toggle is always false - cant Irodeit unless logged in
          allCoasters.map(coaster => {
            coaster.buttonToggle = false;
            return coaster;
          })
        }

        this.setState({ coasters: allCoasters });

      })
      .catch(err => console.log(err))



    const script = document.createElement("script");

    script.src = "/map-assets/map-interact.js";
    script.async = true;

    document.body.appendChild(script);
  }

  // need this method so we can change the state and get the new IRODEIT buttons drawn
  handleAddCoaster = (event) => {
    event.preventDefault();
    // change the state of the coasters in this page
    // find the coaster we clicked on and set its toggle to false

    // for (let i=0; i<this.state.coasters.length; i++){
    //   if (event.target.id === this.state.coasters[i]._id){
    //     console.log("Heather you found it now changing state " + i );
    //     this.state.coasters[i].toggleButton = false;
    //   }
    // }
    // this.setState({coasters: this.state.coasters});

    let allCoasters = [...this.state.coasters];
    for (let i = 0; i < allCoasters.length; i++) {
      if (event.target.id === allCoasters[i]._id) {
        allCoasters[i].buttonToggle = false;
      }
    }
    this.setState({ coasters: allCoasters });

    this.props.handleNewCoasterSubmit(event);
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
        <div className="mx-auto">
          <Pagination
            coastersPerPage={this.state.coastersPerPage}
            totalCoasters={this.state.coasters.length}
            paginate={paginate}
          />
        </div>
        <CoasterCard coasters={currentCoasters} handleNewCoasterSubmit={this.handleAddCoaster} />
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
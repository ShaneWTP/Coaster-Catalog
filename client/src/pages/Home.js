import React, { Component } from "react";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";
import Wrapper from "../components/Wrapper";
import MapPA from "../components/MapPA";
import CoasterCard from "../components/CoasterCard";
import axios from 'axios';
import {Container} from "../components/Grid"

class Home extends Component {
  constructor() {
    super()
    this.state = {
      coasters: []
    }

    this.componentDidMount = this.componentDidMount.bind(this)
  }

  // On mount, check that there is a user in the session
  componentDidMount() {
    API.getCoasters()
      .then(res => this.setState({ coasters: res.data }))
      .catch(err => console.log(err))
  }
	handleNewCoasterSubmit(event) {
		event.preventDefault();
    console.log('New Coaster Submitted!');
    console.log(event.target.id);
    let added = event.target.id;    
		axios.post('/api/user/addcoaster', {coaster: added}).then(response => {
				console.log(response);
				if (!response.data.error) {

					console.log('youre good');
			
				} else {
					console.log('Error: ' + response.data.error);
				}
			
			}).catch(error => {
				console.log('addcoaster error: ' + error)
			 })
	}

  render() {
    return (
      <div className="home">
        <Jumbotron />
        <Wrapper>
          <MapPA />
        </Wrapper>
        <Container><CoasterCard handleNewCoasterSubmit={this.handleNewCoasterSubmit} coasters={this.state.coasters} />
      </Container></div>
    );
  }
}

export default Home;
import React, { Component } from "react";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";
import Wrapper from "../components/Wrapper";
import MapPA from "../components/MapPA";
import CoasterCard from "../components/CoasterCard";
import {Container} from "../components/Grid"

class Home extends Component {
  constructor(props) {
    super(props)
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
	

  render() {
    return (
      <div className="home">
        <Jumbotron user={this.props.user}/>
        <Wrapper>
          <MapPA />
        </Wrapper>
        <Container >
          <Wrapper>
          <CoasterCard handleNewCoasterSubmit={this.props.handleNewCoasterSubmit} coasters={this.state.coasters} />
      </Wrapper></Container></div>
    );
  }
}

export default Home;
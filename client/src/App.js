import React, { Component } from 'react'
import axios from 'axios'
import API from "./utils/API";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginForm from "./pages/Signin";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import SignupForm from "./pages/Signup";
import Coaster from "./pages/Coaster";
import Home from "./pages/FakeHome.js";
import UserProfile from "./pages/Profile.js";
import "./App.css";
import MapPA from "./components/MapPA";
import Jumbotron from "./components/Jumbotron";
import CoasterCard from "./components/CoasterCard";

class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: null,
      coasters: []
    }

    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  // On mount, check that there is a user in the session
  componentDidMount() {
    this.getUser()
    API.getCoasters()
      .then(res => this.setState({ coasters: res.data }))
      .catch(err => console.log(err))
  }

  // set the user to state
  updateUser(userObject) {
    this.setState(userObject)
  }

  // Call a get user to see if there is a user in the session 
  // HLS Someday we will want more than just username
  getUser() {
    axios.get('/user/').then(response => {
      console.log('Get user response: ');
      console.log(response.data);
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ' + response.data.user.username);

        this.setState({
          loggedIn: true,
          username: response.data.user.username
        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          username: null
        })
      }
    })
  }

  render() {
    return (
      <div>


        {this.state.loggedIn ? <h1> Welcome {this.state.username} </h1> :

          <h1> Welcome Nobody </h1>}

        <Router>
          <div className="App">
            <Navbar />
            <Jumbotron />
            <MapPA />
            <CoasterCard coasters={this.state.coasters} />
            {/* <Route exact path="/" component={Home} /> */}
            <Route exact path="/" render={() =>
              <Home
                updateUser={this.updateUser}
              />}
            />
            <Route exact path="/signin" render={() =>
              <LoginForm
                updateUser={this.updateUser}
              />}
            />
            {/* <Route exact path="/signup" component={Signup} updateUser={this.updateUser}/> */}
            <Route exact path="/signup" render={() =>
              <SignupForm
                updateUser={this.updateUser}
              />}
            />

            <Route exact path="/userprofile" render={() =>
              <UserProfile />}
            />
          <Route exact path="/coasters/:id" component={Coaster} />
          

          </div>
          <Footer />
        </Router>
      </div>

    );
  }
}

export default App;

import React, { Component } from 'react'
import API from "./utils/API";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import LoginForm from "./pages/Signin";
import SignupForm from "./pages/Signup";
import UserProfile from "./pages/Profile";
import Cause from "./pages/Cause";
import Coaster from "./pages/Coaster";

import "./App.css";

class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      user: null,
      coasters: []
    }

    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
    this.handleAddRideSubmit = this.handleAddRideSubmit.bind(this)
    this.handleNewCoasterSubmit = this.handleNewCoasterSubmit.bind(this)

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
  // This will update the props for the user and should be called
  // when changes are made.
  getUser() {
    API.getUser().then(response => {
      console.log('Get user response: ');
      console.log(response.data);
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ' + response.data.user.username);

        console.log('Get User: There are coasters saved for this user: ' + JSON.stringify(response.data.user.coasters));

        this.setState({
          loggedIn: true,
          user: response.data.user
        })
      } else {
        console.log('Get user: no user found');
        this.setState({
          loggedIn: false,
          user: null
        })
      }
    })
  }

  // Adds a new roller coaster to the user profile
  handleNewCoasterSubmit(event) {
		event.preventDefault();
    console.log('New Coaster Submitted!');
    console.log(event.target.id);
    let newCoaster = event.target.id;
    
    API.addCoasterToUser(newCoaster).then(response => {
      console.log(response);
      if (!response.data.error) {
        console.log("you're good");
        // getUser will update display
        this.getUser();
      } else {
        console.log('Error: ' + response.data.error);
      }
    }).catch(error => {
      console.log('addcoaster error: ' + error)
      })
  }
  
  // adds a ride to the user's rollercoaster
  handleAddRideSubmit(event) {
		event.preventDefault();
    console.log('handleAddRideSubmit ' + event.target.id);

    API.addRide(event.target.id)
		.then(response => {
      console.log(response);
      if (!response.data.error) {
        console.log("you're good");
        // getUser will update display
        this.getUser();
      } else {
        console.log('Error: ' + response.data.error);
      }
    }).catch(error => {
      console.log('addcoaster error: ' + error)
      })
  }

  render() {
    return (
      <div className="App">

        <Router>

            <Container>
              <Navbar username={this.state.user ? this.state.user.username : ""} updateUser={this.updateUser}/>
              <Switch>
                <Route exact path="/" render={() =>
                  <Home user={this.state.user} updateUser={this.updateUser} handleNewCoasterSubmit={this.handleNewCoasterSubmit} />
                } />
                <Route path="/signin" render={() =>
                  <LoginForm updateUser={this.updateUser} getUser={this.getUser}/>
                } />
                <Route path="/signup" render={() =>
                  <SignupForm updateUser={this.updateUser} getUser={this.getUser}/>
                } />
                <Route exact path="/userprofile" render={() =>
                  <UserProfile user={this.state.user} handleAddRideSubmit={this.handleAddRideSubmit}/>
                } />

                <Route path="/coasters/:id" component={Coaster} user={this.state.user} handleNewCoasterSubmit={this.handleNewCoasterSubmit} />

                <Route path="/cause" render={() =>
                  <Cause/>
                } />

              </Switch>
              <Footer />
            </Container>

        </Router>
      </div >

        );
      }
    }
    
    export default App;

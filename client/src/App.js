import React, { Component } from 'react'
import axios from 'axios'
import API from "./utils/API";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import LoginForm from "./pages/Signin";
import SignupForm from "./pages/Signup";
import UserProfile from "./pages/Profile";
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
    // HLS Note, these calls are asynchronous
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
  getUser() {
    axios.get('/api/user/').then(response => {
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
  handleNewCoasterSubmit(event) {
		event.preventDefault();
    console.log('New Coaster Submitted!');
    console.log(event.target.id);
    let added = event.target.id;    
		axios.post('/api/user/addcoaster', {coaster: added}).then(response => {
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
  handleAddRideSubmit(event) {
		event.preventDefault();
    console.log('handleAddRideSubmit ' + event.target.id);
        
		axios.post('/api/user/addride', {
			coaster: event.target.id,
		}).then(response => {
				console.log(response);
				if (!response.data.error) {

          console.log("you're good");
          // getUser will update display
          this.getUser();

          // this returns old data before ride was increased
          // console.log("the user is " + JSON.stringify(response.data));
          // this.setState({user: response.data});
			
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
              <Navbar username={this.state.user ? this.state.user.username : ""}/>
              <Switch>
                <Route exact path="/" render={() =>
                  <Home updateUser={this.updateUser} handleNewCoasterSubmit={this.handleNewCoasterSubmit} />
                } />
                <Route path="/signin" render={() =>
                  <LoginForm updateUser={this.updateUser} />
                } />
                <Route path="/signup" render={() =>
                  <SignupForm updateUser={this.updateUser} />
                } />
                <Route exact path="/userprofile" render={() =>
                  <UserProfile user={this.state.user} handleAddRideSubmit={this.handleAddRideSubmit}/>
                } />
                <Route path="/coasters/:id" component={Coaster} />
              </Switch>
              <Footer />
            </Container>

        </Router>
      </div >

        );
      }
    }
    
    export default App;

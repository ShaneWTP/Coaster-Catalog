import React, { Component } from 'react'
import axios from 'axios'
import API from "./utils/API";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginForm from "./pages/Signin";
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
      user: null,
      coasters: []
    }

    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
    this.handleAddRideSubmit = this.handleAddRideSubmit.bind(this)
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

  handleAddRideSubmit(event) {
		event.preventDefault();
    console.log('handleAddRideSubmit ' + event.target.id);
        
		axios.post('/api/user/addride', {
			coaster: event.target.id,
		}).then(response => {
				console.log(response);
				if (!response.data.error) {

          console.log('youre good ');
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
      <div>


        {this.state.loggedIn ? <h1> Welcome {this.state.user.username} </h1> :
          <h1> Welcome </h1>}

        <Router>
          <div className="App">
            <Navbar />

            <Jumbotron />
            <MapPA />
            <CoasterCard coasters={this.state.coasters} />
            {/* <Route exact path="/" component={Home} /> */}

            <Route exact path="/userprofile" render={() =>
              <UserProfile user={this.state.user} handleAddRideSubmit={this.handleAddRideSubmit}/>}
            />

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

          <Route exact path="/coasters/:id" component={Coaster} />
          

          </div>
          <Footer />
        </Router>
      </div>

    );
  }
}

export default App;

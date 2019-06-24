
import axios from "axios";

export default {
  // Gets all coasters
  getCoasters: function() {
    return axios.get("/api/coasters");
  },
  // Gets the coaster with the given id
  getCoaster: function(id) {
    return axios.get("/api/coasters/" + id);
  },
  // Deletes the coaster with the given id
  deleteCoaster: function(id) {
    return axios.delete("/api/coasters/" + id);
  },
  // Saves a coaster to the database
  saveCoaster: function(coasters) {
    return axios.post("/api/coasters", coasters);
  },
  // handle logout, gets rid of session on server
  signout: function() {
    return axios.get('/logout');
  },
  // handle signin, authenticates user and creates session on server
  signin: function(username, password) {
    return axios.post('/signin', {
      username: username,
      password: password
    });
  },
  // creates account on server and starts a user session on server
  signup: function(username, password) {
    return axios.post('/signup', {
      username: username,
      password: password
    });
  },
  // gets the user (from deserializeUser) from the session on the server
  getUser: function() {
    return axios.get('/api/user/');
  },
  // adds a new coaster to the user document
  addCoasterToUser: function(newCoaster) {
    return axios.post('/api/user/addcoaster', {coaster: newCoaster});
  },
  // add a ride to the coaster in a user document
  addRide: function(newCoaster) {
    return axios.put('/api/user/addride', {coaster: newCoaster});
  }
};
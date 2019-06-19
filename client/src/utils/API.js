
import axios from "axios";

export default {
  // Gets all coasters
  getCoasters: function() {
    return axios.get("/api/coasters");
  },
  // Gets the coaster with the given id
  getCoaster: function(id) {
    return axios.get("/api/coaster/" + id);
  },
  // Deletes the coaster with the given id
  deleteCoaster: function(id) {
    return axios.delete("/api/coasters/" + id);
  },
  // Saves a coaster to the database
  saveCoaster: function(coasters) {
    return axios.post("/api/coasters", coasters);
  }
};
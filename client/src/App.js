import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import "./App.css";

function App() {

  return (
    <Router>
    <div className="App">

      <Route exact path="/" component={Signin} />
      <Route exact path="/signin" component={Signin} />
      <Route exact path="/signup" component={Signup} />
        
    </div>
    </Router>
  );
}

export default App;

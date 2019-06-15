import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Jumbotron from "./components/Jumbotron";
import Container from "./components/Container";
import MapPA from "./components/MapPA";

class App extends Component {

  render() {
    return (
      <Container>
        <Navbar />
        <Jumbotron />
        <Wrapper>
          <MapPA/>
        </Wrapper>
        <Footer />
      </Container>
    );
  }
}

export default App;
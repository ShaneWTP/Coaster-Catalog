import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";

class Coaster extends Component {
    state = {
        coaster: {}
    };
    // When this component mounts, grab the coaster with the _id of this.props.match.params.id
    // e.g. localhost:3000/coasters/599dcb67f0f16317844583fc
    componentDidMount() {
        API.getCoaster(this.props.match.params.id)
            .then(res => this.setState({ coaster: res.data }))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <Container >
                <Row>
                    <Col size="12">
                        <h1 className="display-4 text-center">
                            {this.state.coaster.name}
                        </h1>
                        <h2 classname="text-center">
                            {this.state.coaster.park}
                        </h2>
                        <br></br>
                    </Col>
                </Row>
                <Row>
                    <Col size="12">
                        <div className="row text-center text-lg-left">
                            <div className="col-lg-3 col-md-4 col-6">
                                <img class="img-fluid img-thumbnail" src={this.state.coaster.img1 || `https://via.placeholder.com/300x225?text=No+Image+Available`} alt={this.state.coaster.name} />
                            </div>
                            <div className="col-lg-3 col-md-4 col-6">
                                <img class="img-fluid img-thumbnail" src={this.state.coaster.img2 || `https://via.placeholder.com/300x225?text=No+Image+Available`} alt={this.state.coaster.name} />
                            </div>
                            <div className="col-lg-3 col-md-4 col-6">
                                <img class="img-fluid img-thumbnail" src={this.state.coaster.img3 || `https://via.placeholder.com/300x225?text=No+Image+Available`} alt={this.state.coaster.name} />
                            </div>
                            <div className="col-lg-3 col-md-4 col-6">
                                <img className="img-fluid img-thumbnail" src={this.state.coaster.img4 || `https://via.placeholder.com/300x225?text=No+Image+Available`} alt={this.state.coaster.name} />
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col size="12">
                        <br></br>
                        <article>
                            <h1>Statistics</h1>
                            <p className="text-left">
                                Location: {this.state.coaster.location}
                                </p>
                            <p className="text-left">
                                Operating Since: {this.state.coaster.operating || "N/A"}
                            </p>
                            <p className="text-left">
                                Rating: {this.state.coaster.rating || "No rating yet"}
                            </p>
                            <p className="text-left">
                                Awards: {this.state.coaster.awards || "No awards listed"}
                            </p>
                            <p className="text-left">
                                Type: {this.state.coaster.type || "No type listed"}
                            </p>
                            <p className="text-left">
                                Designer: {this.state.coaster.designer || "No designer listed"}
                            </p>
                            <p className="text-left">
                                Manufacturer: {this.state.coaster.manufacturer}
                            </p>

                        </article>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-2">
                        <Link to="/">← Back to Home</Link>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Coaster;

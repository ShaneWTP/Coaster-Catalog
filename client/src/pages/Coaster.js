import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";
const divStyle = {
    width: "auto",/* You can set the dimensions to whatever you want */
    height: "225px",
    objectFit: "cover"
};
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
            <div className="coaster">
                <Container><Row>
                    <Col size="12">
                        <h1 className="display-4 text-center">
                            {this.state.coaster.name}
                        </h1>
                        <h2 classname="text-center">
                            {this.state.coaster.park}
                        </h2>
                        <p className="text-center">
                            {this.state.coaster.location}
                        </p>
                        <br></br>
                    </Col>
                </Row></Container>
                <Container>
                    <Row>
                        <Col size="12">
                            <div className="row text-center">
                                <div className="col-lg-3 col-6" >
                                    <img class="img-fluid img-thumbnail" style={divStyle} src={this.state.coaster.img1 || `https://via.placeholder.com/300x225?text=No+Image+Available`} alt={this.state.coaster.name} />
                                </div>
                                <div className="col-lg-3 col-6">
                                    <img class="img-fluid img-thumbnail" style={divStyle} src={this.state.coaster.img2 || `https://via.placeholder.com/300x225?text=No+Image+Available`} alt={this.state.coaster.name} />
                                </div>
                                <div className="col-lg-3 col-6">
                                    <img class="img-fluid img-thumbnail" style={divStyle} src={this.state.coaster.img3 || `https://via.placeholder.com/300x225?text=No+Image+Available`} alt={this.state.coaster.name} />
                                </div>
                                <div className="col-lg-3 col-6">
                                    <img className="img-fluid img-thumbnail" style={divStyle} src={this.state.coaster.img4 || `https://via.placeholder.com/300x225?text=No+Image+Available`} alt={this.state.coaster.name} />
                                </div>
                            </div>
                            <br></br>
                        </Col>
                    </Row>

                    <Row ><h1 className="text-center">Statistics</h1></Row>
                    <Row>
                        <Col size="4">
                            <br></br>

                            <p className="text-left">
                                Operating Since: {this.state.coaster.operating || "N/A"}
                            </p>
                            <p className="text-left">
                                Rating: {this.state.coaster.rating || "No rating yet"}
                            </p>
                            <p className="text-left">
                                Type: {this.state.coaster.type || "No type listed"}
                            </p>
                            <p className="text-left">
                                Designer: {this.state.coaster.designer || "No designer listed"}
                            </p>
                            <p className="text-left">
                                Manufacturer: {this.state.coaster.manufacturer || "No manufacturer listed"}
                            </p> <p className="text-left">
                                Model: {this.state.coaster.model || "Model not listed"}
                            </p>
                        </Col>
                        <Col size="4">
                            <br></br>
                            <p className="text-left">
                                Duration: {this.state.coaster.duration || "Duration not listed"}
                            </p>
                            <p className="text-left">
                                G-force: {this.state.coaster.gforce || "G-force not listed"}
                            </p>
                            <p className="text-left">
                                Vertical Angle: {this.state.coaster.vertangle || "Vertical angle not listed"}
                            </p>
                            <p className="text-left">
                                Scale: {this.state.coaster.scale || "Scale not listed"}
                            </p>
                            <p className="text-left">
                                Awards: {this.state.coaster.awards || "No awards listed"}
                            </p>

                        </Col>

                        <Col size="4">
                            <br></br>

                            <p className="text-left">
                                Height: {this.state.coaster.height || "Height not available"}
                            </p>
                            <p className="text-left">
                                Drop: {this.state.coaster.drop || "Drop not listed"}
                            </p>
                            <p className="text-left">
                                Speed: {this.state.coaster.speed || "Speed not listed"}
                            </p>
                            <p className="text-left">
                                Length: {this.state.coaster.length || "Length not listed"}
                            </p>
                            <p className="text-left">
                                Inversions: {this.state.coaster.inversions || "Inversions not listed"}
                            </p>
                        </Col>
                    </Row>
                </Container>
                <Row>
                    <Col size="md-2">
                        <Link to="/">← Back to Home</Link>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Coaster;

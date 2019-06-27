import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";
import RodeIt from "../components/RodeItButton";
import Stars from "../components/Stars";
import BarChart from "../components/BarChart";
import DoughnutChart from "../components/DoughnutChart";

var Carousel = require('react-responsive-carousel').Carousel;

const imgStyle = {
    width: "auto",
    height: "auto",
    objectFit: "cover"
}
const headerFont = {
    'font-family': 'Carter One, cursive'
}
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
                <Row>
                    <Col size="5">
                        <Carousel showThumbs={false} infiniteLoop={true}>
                            <div style={imgStyle} className="carousel-img m-auto">
                                <img src={this.state.coaster.img1} alt={this.state.coaster.name} />
                            </div>
                            {this.state.coaster.img2 ? <div style={imgStyle} className="carousel-img m-auto">
                                <img src={this.state.coaster.img2 || ""} alt={this.state.coaster.name} />
                            </div> : null}
                            {this.state.coaster.img3 ? <div style={imgStyle} className="carousel-img m-auto">
                                <img src={this.state.coaster.img3} alt={this.state.coaster.name} />
                            </div> : null}
                            {this.state.coaster.img4 ? <div style={imgStyle} className="carousel-img m-auto">
                                <img src={this.state.coaster.img4} alt={this.state.coaster.name} />
                            </div> : null}
                        </Carousel>
                    </Col>
                    <Col size="7">
                        <div className="container h-100">
                            <div className="d-flex h-100 align-items-center">
                                <div className="col-12">
                                    <h1 className="display-4 font-weight-bold text-center" style={headerFont}>
                                        {this.state.coaster.name}
                                    </h1>
                                    <h2 className="text-center">
                                        {this.state.coaster.park}
                                    </h2>
                                    <h4 className="text-center">
                                        {this.state.coaster.location}
                                    </h4>
                                    <div className="text-center">
                                        <Stars rating={this.state.coaster.rating}/>
                                        <RodeIt handleNewCoasterSubmit={this.props.handleNewCoasterSubmit} id={this.state.coaster._id} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <br></br>
                <br></br>

                <Container>
                    <div className="card">
                        <div className="card-body">
                            <h1 className="text-center font-weight-bold">Fast Facts</h1>

                            <br />
                            <Row>
                                <Col size="4">
                                    <h3 className="text-center">Tallest Height: {this.state.coaster.height} ft</h3>
                                    <BarChart height={this.state.coaster.height} />
                                </Col>
                                <Col size="1"></Col>
                                <Col size="7">
                                    <h3 className="text-center">Fastest Speed: {this.state.coaster.speed} mph</h3>
                                    <DoughnutChart />
                                </Col>
                            </Row>

</div></div>
                            <br></br>
                            <div className="card">
                        <div className="card-body">

                            <div className="text-center"> <h1 className="font-weight-bold">Statistics</h1></div>

                            <Row>
                                <Col size="4">
                                    <br></br>
                                    <h5 className="text-left">
                                        <span className="font-weight-bold">Operating Since:</span> {this.state.coaster.operating || "N/A"}
                                    </h5>
                                    <h5 className="text-left">
                                        <span className="font-weight-bold">Type: </span>{this.state.coaster.type || "No type listed"}
                                    </h5>
                                    <h5 className="text-left">
                                        <span className="font-weight-bold"> Designer: </span>{this.state.coaster.designer || "No designer listed"}
                                    </h5>
                                    <h5 className="text-left">
                                        <span className="font-weight-bold"> Manufacturer: </span>{this.state.coaster.manufacturer || "No manufacturer listed"}
                                    </h5>
                                    <h5 className="text-left">
                                        <span className="font-weight-bold">Model:</span> {this.state.coaster.model || "Model not listed"}
                                    </h5>
                                </Col>
                                <Col size="4">
                                    <br></br>
                                    <h5 className="text-left">
                                        <span className="font-weight-bold">Duration:</span> {this.state.coaster.duration || "Duration not listed"}
                                    </h5>

                                    <h5 className="text-left">
                                        <span className="font-weight-bold"> G-force:</span> {this.state.coaster.gforce || "G-force not listed"}
                                    </h5>
                                    <h5 className="text-left">
                                        <span className="font-weight-bold"> Vertical Angle:</span> {this.state.coaster.vertangle || "Vertical angle not listed"}
                                    </h5>
                                    <h5 className="text-left">
                                        <span className="font-weight-bold">Scale: </span>{this.state.coaster.scale || "Scale not listed"}
                                    </h5>
                                    <h5 className="text-left">
                                        <span className="font-weight-bold">Awards:</span> {[this.state.coaster.awards].join() || "No awards listed"}
                                    </h5>
                                </Col>
                                <Col size="4">
                                    <br></br>
                                    <h5 className="text-left">
                                        <span className="font-weight-bold">Height: </span>{this.state.coaster.height || "Height not available"}
                                    </h5>
                                    <h5 className="text-left">
                                        <span className="font-weight-bold"> Drop: </span>{this.state.coaster.drop || "Drop not listed"}
                                    </h5>
                                    <h5 className="text-left">
                                        <span className="font-weight-bold"> Speed: </span>{this.state.coaster.speed || "Speed not listed"}
                                    </h5>
                                    <h5 className="text-left">
                                        <span className="font-weight-bold"> Length:</span> {this.state.coaster.length || "Length not listed"}
                                    </h5>
                                    <h5 className="text-left">
                                        <span className="font-weight-bold">Inversions: </span>{this.state.coaster.inversions || "Inversions not listed"}
                                    </h5>
                                </Col>
                            </Row>
                            </div></div>
                
                </Container>
                <Row>
                    <Col size="md-2 offset-1">
                        <Link to="/">← Back to Home</Link>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Coaster;

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";
import RodeIt from "../components/RodeItButton";
import StarRatingComponent from 'react-star-rating-component';
import BarChart from "../components/BarChart";
import DoughnutChart from "../components/DoughnutChart";

var Carousel = require('react-responsive-carousel').Carousel;

const imgStyle = {
    width: "100%",
    maxHeight: "600px",
    objectFit: "cover",
}
const headerFont = {
    'fontFamily': 'Carter One, cursive'
}
class Coaster extends Component {
    constructor() {
        super()

        this.state = {
        coaster: {},
        // shall the button be disabled?
        buttonDisabled: false,
        // shall we display the button?
        buttonToggle: true
        };

        // Bind your click handler
        this.onButtonClick = this.onButtonClick.bind(this);
    }   

    // When this component mounts, grab the coaster with the _id of this.props.match.params.id
    // e.g. localhost:3000/coasters/599dcb67f0f16317844583fc
    componentDidMount() {
        API.getCoaster(this.props.match.params.id)
            .then(res => {
                this.setState({ coaster: res.data });
            })
            .catch(err => console.log(err));
    }

    /* This function contains the logic for determining whether there is a user and whether the user has already added this roller coaster to their profile. This code did not work inside the componentDidMount function because the user object was not populated in time (asynchronous issue). The props.user was always null. This function is called whenever a render() is called whether or not props has changed.
    */
    componentWillReceiveProps(nextProps) {
        this.props = nextProps;
        // console.log("COMPONENTWILLRECEIVEPROPS HAS BEEN CALLED");
        this.setState({buttonToggle: true});
        // check and see if the coaster is in the user's coaster list?
        // if there is a user
        if (this.props.user) {
            // console.log("there is a user");
            for (let i = 0; i < this.props.user.coasters.length; i++) {
                let userCoasterId = this.props.user.coasters[i].coaster._id;
                // If user already has this coaster in their profile
                // do not add the Irodeit button
                if (userCoasterId === this.state.coaster._id){
                    // console.log("we found this coaster in the user's coasters");
                    // this will hide the button
                    // this.setState({buttonToggle: false});
                    // this will show the button in diabled state
                    this.setState({buttonDisabled: true});
                }
            }
        } else // if there is no user do not add the Irodeit button
        {
            // console.log("no user was found");
            this.setState({buttonToggle: false});
        }
      }

    onButtonClick(event) {
        this.setState({buttonDisabled: true});
        event.preventDefault();
        this.props.handleNewCoasterSubmit(event);
    }

    render() {
        return (
            <div className="coaster" key={this.props.user}>
                <div class="jumbotron" style={{ backgroundImage: 'url(' + this.state.coaster.img1 + ')', backgroundSize: 'cover', width: '100vw', backgroundPosition: 'center' }}>
                    <div className="overlay"></div>
                    <div className="container h-100 jumbocontainer">
                        <div className="d-flex h-100 align-items-center">
                            <div className="col-12 text-white jumbo-text">
                                <h1 className="display-4 font-weight-bold text-center jumbo-text" style={headerFont}>
                                    {this.state.coaster.name}
                                </h1>
                                <h2 className="text-center jumbo-text">
                                    {this.state.coaster.park}
                                </h2>
                                <h4 className="text-center jumbo-text">
                                    {this.state.coaster.location}
                                </h4>
                                <div className="text-center">
                                    <StarRatingComponent
                                        name="rate1"
                                        starCount={5}
                                        value={this.state.coaster.rating}
                                        editing={false}
                                        emptyStarColor="white"
                                    />
                                        {this.props.user ? 
                                            this.state.buttonToggle ? 
                                            <RodeIt handleNewCoasterSubmit={this.onButtonClick} 
                                             id={this.state.coaster._id}
                                             disabled={this.state.buttonDisabled}
                                            />
                                        : "" 
                                         : ""    
                                        }
                                        {this.state.buttonDisabled ? 
                                        <p>Coaster has been added to your profile</p> : ""}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Container>
                    <div className="card">
                        <div className="card-body">
                            <h1 className="text-center font-weight-bold">Fast Facts</h1>
                            <br />
                            <Row>
                                <Col size="4">
                                    <h3 className="text-center">Tallest Height: {this.state.coaster.height} ft</h3>
                                    <BarChart coasterHeight={this.state.coaster.height} />
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
                                    <h5 className="text-left stats">
                                        <span className="font-weight-bold stats">Operating Since:</span> {this.state.coaster.operating || "N/A"}
                                    </h5>
                                    <h5 className="text-left stats">
                                        <span className="font-weight-bold stats">Type: </span>{this.state.coaster.type || "No type listed"}
                                    </h5>
                                    <h5 className="text-left stats">
                                        <span className="font-weight-bold stats"> Designer: </span>{this.state.coaster.designer || "No designer listed"}
                                    </h5>
                                    <h5 className="text-left stats">
                                        <span className="font-weight-bold stats"> Manufacturer: </span>{this.state.coaster.manufacturer || "No manufacturer listed"}
                                    </h5>
                                    <h5 className="text-left stats">
                                        <span className="font-weight-bold stats">Model:</span> {this.state.coaster.model || "Model not listed"}
                                    </h5>
                                </Col>
                                <Col size="4">
                                    <br></br>
                                    <h5 className="text-left stats">
                                        <span className="font-weight-bold stats">Duration:</span> {this.state.coaster.duration || "Duration not listed"}
                                    </h5>

                                    <h5 className="text-left stats">
                                        <span className="font-weight-bold stats"> G-force:</span> {this.state.coaster.gforce || "G-force not listed"}
                                    </h5>
                                    <h5 className="text-left stats">
                                        <span className="font-weight-bold stats"> Vertical Angle:</span> {this.state.coaster.vertangle || "Vertical angle not listed"}
                                    </h5>
                                    <h5 className="text-left stats">
                                        <span className="font-weight-bold stats">Scale: </span>{this.state.coaster.scale || "Scale not listed"}
                                    </h5>
                                    <h5 className="text-left stats">
                                        <span className="font-weight-bold stats">Awards:</span> {[this.state.coaster.awards].join() || "No awards listed"}
                                    </h5>
                                </Col>
                                <Col size="4">
                                    <br></br>
                                    <h5 className="text-left stats">
                                        <span className="font-weight-bold stats">Height: </span>{this.state.coaster.height || "Height not available"}
                                    </h5>
                                    <h5 className="text-left stats">
                                        <span className="font-weight-bold stats"> Drop: </span>{this.state.coaster.drop || "Drop not listed"}
                                    </h5>
                                    <h5 className="text-left stats">
                                        <span className="font-weight-bold stats"> Speed: </span>{this.state.coaster.speed || "Speed not listed"}
                                    </h5>
                                    <h5 className="text-left stats">
                                        <span className="font-weight-bold stats"> Length:</span> {this.state.coaster.length || "Length not listed"}
                                    </h5>
                                    <h5 className="text-left stats">
                                        <span className="font-weight-bold stats">Inversions: </span>{this.state.coaster.inversions || "Inversions not listed"}
                                    </h5>
                                </Col>
                            </Row>
                        </div>
                    </div>
                    <br></br>
                    <Row>
                        <Col size="12">
                            <Carousel showThumbs={false} infiniteLoop={true} >
                                <div style={imgStyle} className="carousel-img m-auto">
                                    <img src={this.state.coaster.img1} alt={this.state.coaster.name} />
                                </div>
                                {this.state.coaster.img2 ? <div style={imgStyle} className="carousel-img m-auto">
                                    <img style={imgStyle} src={this.state.coaster.img2 || ""} alt={this.state.coaster.name} />
                                </div> : null}
                                {this.state.coaster.img3 ? <div style={imgStyle} className="carousel-img m-auto">
                                    <img style={imgStyle} src={this.state.coaster.img3} alt={this.state.coaster.name} />
                                </div> : null}
                                {this.state.coaster.img4 ? <div style={imgStyle} className="carousel-img m-auto">
                                    <img style={imgStyle} src={this.state.coaster.img4} alt={this.state.coaster.name} />
                                </div> : null}
                            </Carousel>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-body text-center">
                                    <Link to="/"><h4 className="nameLink">← Back to Home</h4></Link>
                                </div>
                            </div>
                        </div>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Coaster;

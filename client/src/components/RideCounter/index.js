import React from "react";
import { Row, Col } from "../Grid";
import "./style.css";

const RideCounter = props => {
    return (
        <div className="card">
            <div className="card-body" >
                <h4>Ride Counter</h4>
                <Row>
                <Col size="sm-6">
                    <p>Current Number of Rides</p>
                </Col>
                <Col size="sm-6">
                    {/* <div className="rideBox"> */}
                    <div className="card">
                    <div className="card-body" >
                        <h4>{props.userCoaster.numRides}</h4>
                    </div>
                    </div>
                </Col>
                </Row>
                <Row>
                    <div className="col-sm-12 align-self-center">
                        <button id={props.userCoaster.coaster._id} onClick={props.handleAddRideSubmit} >Add Ride</button>
                    </div>
                </Row>
            </div>
        </div>

)
}
export default RideCounter
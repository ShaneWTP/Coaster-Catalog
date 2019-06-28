import React from "react";
import { Row, Col } from "../Grid";
import "./style.css";

const RideCounter = props => {
    return (
        <div >
            <div className="card mx-auto">
                <div className="card-body text-center mx-auto" >
                    <h4>Ride Counter</h4>
                    <Row>
                        <div className="col-12 mx-auto">
                            <div className="text-center mx-auto">
                                <div className="card p-2 mb-3 mt-1">
                                    <h4>{props.userCoaster.numRides}</h4>
                                </div>
                            </div>
                        </div>
                    </Row>
                    <Row>
                        <Col size="12">
                            <div className="row justify-content-center">
                                <button className="btn" id={props.userCoaster.coaster._id} onClick={props.handleAddRideSubmit} >Add Ride</button>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>






    )
}
export default RideCounter
import React from 'react';
import { Row, Col } from "../components/Grid";
import CoasterCard from "../components/CoasterCard";

const UserProfile = props => {
  console.log("Inside UserProfile " + JSON.stringify(props,null,2));

  

  return (
				
        <div >
          <h1> Welcome {props.user ? props.user.username : ""} </h1>

          <h4>Total Number of Coasters Ridden</h4>
          <h4> {props.user ? props.user.coasters.length : ""}</h4>

          <h4>Total Number of Rides on Coasters</h4>
          <h4> {props.user ? props.user.numTotalRides : ""} </h4>

          {/* <CoasterCard coasters={props.user ? [props.user.coasters[0].coaster] : [] } /> */}
          <Row className="row" >
              {props.user ? props.user.coasters.map(coaster => 
              {
                return (
                <div>
                <Col size="sm-8">
                  <CoasterCard coasters= {[coaster.coaster]} />
                </Col>
                <Col size="sm-3">
                  <h2>Ride Counter</h2>
                  <Row className="row" >
                    <Col size="sm-6">
                      <h4>{coaster.numRides}</h4>
                    </Col>
                    <Col size="sm-6">
                    <button id={coaster.coaster._id} onClick={props.handleAddRideSubmit} >Add Ride</button>
                    </Col>
                  </Row>
                </Col>
                </div>
                )

              })
              : <br/>
              }

          </Row>
        </div>
      )
  }

export default UserProfile;

import React from 'react';
import { Row, Col } from "../components/Grid";
import CoasterCard from "../components/CoasterCard";
import RideCounter from "../components/RideCounter";
import AddStars from "../components/AddStars";

const UserProfile = props => {

  return (
				
      <div className="container">
        <div className="card col-12 my-4">
          <div className="card-body" >
            <h1 className="text-center pb-2"> Welcome {props.user ? props.user.username 
              
              : " -  Please Sign In"} </h1>

            <Row>
              <Col size="6">
                <h4 className="text-center">Total Number of Coasters Ridden</h4>
                <div className="card text-center">
                  <div className="card-body text-center" >
                    <h4> {props.user ? props.user.coasters.length : 0}</h4>
                  </div>
                </div>
              </Col>
              <Col size="6">
              <h4 className="text-center">Total Number of Rides</h4>
                <div className="card text-center">
                  <div className="card-body text-center" >
                    <h4> {props.user ? props.user.numTotalRides : 0} </h4>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>

            {props.user ? props.user.coasters.map(coaster => 
            {
              return (
                <div className="card">
                  <div className="card-body" >
                    <Row >
                      <div className="col-6">
                        <CoasterCard coasters= {[coaster.coaster]} />
                      </div>
                      <div className="col-4">
                        <RideCounter userCoaster={coaster} 
                                      handleAddRideSubmit={props.handleAddRideSubmit}/>
                      </div>
                      <div className="col-2">
                        <AddStars userCoaster={coaster}
                                  getUser={props.getUser}/>
                      </div>
                    </Row> 
                  </div>
                </div>
              )

            })
            : <br/>
            }

      </div>
    )
  }

export default UserProfile;

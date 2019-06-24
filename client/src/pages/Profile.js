import React from 'react';
import { Row, Col, Container } from "../components/Grid";
import CoasterCard from "../components/CoasterCard";
import RideCounter from "../components/RideCounter";

const UserProfile = props => {
  console.log("Inside UserProfile " + JSON.stringify(props,null,2));

//   const rowStyle = {
//     backgroundColor: "#fffff"
// };

  return (
				
        <Container fluid>

          <div className="card">
            <div className="card-body" >
              <h1> Welcome {props.user ? props.user.username : ""} </h1>

              <Row>
                <Col size="sm-6">
                  <h4>Total Number of Coasters Ridden</h4>
                  <div className="card">
                    <div className="card-body" >
                      <h4> {props.user ? props.user.coasters.length : ""}</h4>
                    </div>
                  </div>
                </Col>
                <Col size="sm-6">
                  <h4>Total Number of Rides</h4>
                  <div className="card">
                    <div className="card-body" >
                      <h4> {props.user ? props.user.numTotalRides : ""} </h4>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>

          {/* <CoasterCard coasters={props.user ? [props.user.coasters[0].coaster] : [] } /> */}
              {props.user ? props.user.coasters.map(coaster => 
              {
                return (
                  <div className="card">
                    <div className="card-body" >
                        {/* <Row style={rowStyle}> */}
                      <Row >
                        <div className="col-sm-8 align-self-center">
                          <CoasterCard coasters= {[coaster.coaster]} />
                        </div>
                        <div className="col-sm-3 align-self-center">
                          <RideCounter userCoaster={coaster} 
                                        handleAddRideSubmit={props.handleAddRideSubmit}/>
                        </div>
                      </Row> 
                    </div>
                  </div>
                )

              })
              : <br/>
              }

        </Container>
      )
  }

export default UserProfile;

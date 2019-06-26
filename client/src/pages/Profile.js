import React from 'react';
import { Row, Col } from "../components/Grid";
import CoasterCard from "../components/CoasterCard";
import RideCounter from "../components/RideCounter";
import AddStars from "../components/AddStars";

const UserProfile = props => {
  // console.log("Inside UserProfile " + JSON.stringify(props,null,2));

//   const rowStyle = {
//     backgroundColor: "#fffff"
// };

  return (
				
      <div className="container">
        <div className="card col-12 m-4">
          <div className="card-body" >
            <h1 className="text-center pb-2"> Welcome {props.user ? props.user.username 
              
              : " -  Please Sign In"} </h1>

            <Row>
              <Col size="sm-6">
                <h4>Total Number of Coasters Ridden</h4>
                <div className="card">
                  <div className="card-body" >
                    <h4> {props.user ? props.user.coasters.length : 0}</h4>
                  </div>
                </div>
              </Col>
              <Col size="sm-6">
                <h4>Total Number of Rides</h4>
                <div className="card">
                  <div className="card-body" >
                    <h4> {props.user ? props.user.numTotalRides : 0} </h4>
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
                      <div className="col-sm-2 align-self-center">
                        <RideCounter userCoaster={coaster} 
                                      handleAddRideSubmit={props.handleAddRideSubmit}/>
                      </div>
                      <div className="col-sm-2 align-self-center">
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

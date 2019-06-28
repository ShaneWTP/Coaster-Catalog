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
          {props.user ? <h1 className="text-center pb-2"> Welcome {props.user.username} </h1>
            : <h1 className="text-center pb-2">Welcome - Please <a href="/signin" className="nameLink">Sign In</a></h1>}

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

      {props.user ? props.user.coasters.map(coaster => {
        return (
          
          <div className="card" key={coaster._id}>
            <div className="card-body" >
              <Row >
                <Col size="6">
                  <CoasterCard coasters={[coaster.coaster]} />
                </Col>
                <Col size="6">
                  {/* <div className="card">
                    <div className="card-body" > */}
                      <Row>
                        <Col size="sm-12 lg-8">
                          <RideCounter userCoaster={coaster}
                            handleAddRideSubmit={props.handleAddRideSubmit} />
                        </Col>
                        <Col size="sm-12 lg-4">
                          <AddStars userCoaster={coaster}
                            getUser={props.getUser} />
                        </Col>
                      </Row>
                    {/* </div>
                  </div> */}

                </Col>
              </Row>
            </div>
          </div>
        )

      })
        : <br />
      }

    </div>
  )
}

export default UserProfile;

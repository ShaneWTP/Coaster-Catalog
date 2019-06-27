import React from "react";
import { Row, Col } from "../Grid";
import RodeIt from "../RodeItButton";
// import Stars from "../Stars";
import StarRatingComponent from 'react-star-rating-component';


import "./style.css";

const CoasterCard = props => {
  console.log("Here you go: " + JSON.stringify(props.user), null, 2)
  return (
    <div className="container cc-section">
      {props.coasters.map(coaster => {
        return (
            <li className="card my-1 coastercard" key={coaster._id}>
              <Row className="row" id={coaster._id} >
                <Col size="1">
                  <div className="color-div" id={coaster.park.split(" ")[0]} ></div>
                </Col>
                <Col size="3">
                  <a href={"/coasters/" + coaster._id}>
                    <div className="coasterImage my-3 text-center">
                      <img src={coaster.img1 || "https://via.placeholder.com/150C/O"} className="img-circle" alt={coaster.name} />
                    </div></a>
                </Col>
                <Col size="8" className="coasterInfo px-3">
                  <div className="card-block px-3">
                    <Row>
                      <a href={"/coasters/" + coaster._id} className="nameLink">
                        <h4 className="coasterName card-title text-left my-2">{coaster.name}</h4>
                      </a>
                    </Row>
                    <Row>
                      <p className="coasterPark text-left">{coaster.park} | {coaster.location}</p>
                    </Row>
                    <Row>
                      {/* <Stars /> */}
                      <StarRatingComponent 
                          name="rate1" 
                          starCount={5}
                          value={coaster.rating}
                          editing={false}
                        />
                      {/* <p className="coasterRating">{coaster.rating}</p> */}
                    </Row>

                  {/* HLS don't know what to do */}
                  { props.user ?
                    <Row>
                       <RodeIt className="text-left" handleNewCoasterSubmit={props.handleNewCoasterSubmit} id={coaster._id}/>
                       <a href={"/coasters/" + coaster._id} className="btn">More Info</a>
                    </Row>
                     : 
                      <Row></Row>
                  }


                  </div>
                </Col>
              </Row>
            </li>
        );
      })}
    </div>
  )
}
export default CoasterCard
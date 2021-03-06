import React from "react";
import { Row, Col } from "../Grid";
import RodeIt from "../RodeItButton";
// import Stars from "../Stars";
import StarRatingComponent from 'react-star-rating-component';


import "./style.css";

const CoasterCard = props => {
  // props.coasters.map(res=> console.log(res.buttonToggle));
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

                  {/* check the toggle */}
                  { 
                    coaster.buttonToggle ?
                    <Row>
                       <RodeIt className="text-left" handleNewCoasterSubmit={props.handleNewCoasterSubmit} id={coaster._id}/>

                       <a href={"/coasters/" + coaster._id} className="btn mb-3">More Info &nbsp;<i className="fas fa-angle-double-right"></i></a>
                    </Row>
                     : 
                      <Row>
                        <a href={"/coasters/" + coaster._id} className="btn mb-3">More Info &nbsp;<i className="fas fa-angle-double-right"></i></a>

                      </Row>
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
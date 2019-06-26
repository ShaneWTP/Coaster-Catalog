import React from "react";
import { Row, Col } from "../Grid";
import RodeIt from "../RodeItButton";
import Stars from "../Stars";
import "./style.css";

const CoasterCard = props => {
  return (
    <div className="container cc-section">
      <br/>
      <div className="row">
        <div className="col l12 s12" id="map-title">
          <h3>Roller Coaster Index</h3>
          <br/>
          <p>Page through the list for information about all the roller coasters in Pennsylvania are located. <br/>Click on a Coaster's image to go to the Coaster's Profile page for even more information about the coaster's origin and stats.</p>
          <br/>
        </div> 
      </div>  
      <br/>
      {props.coasters.map(coaster => {
        return (
            <li className="card my-1 coastercard" key={coaster._id}>
              <Row className="row" id={coaster._id} >
                <Col size="1">
                  <div className="color-div" id={coaster.park.split(" ")[0]} ></div>
                </Col>
                <Col size="3">
                  <a href={"/coasters/" + coaster._id}>
                    <div className="coasterImage my-3">
                      <img src={coaster.img1 || "https://via.placeholder.com/150C/O"} className="img-circle" alt={coaster.name} />
                    </div></a>
                </Col>
                <Col size="md-8" className="coasterInfo px-3">
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
                      <Stars />
                      <p className="coasterRating">{coaster.rating}</p>
                    </Row>
                    <Row>
                    <RodeIt handleNewCoasterSubmit={props.handleNewCoasterSubmit} id={coaster._id}/>                    </Row>
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
import React from "react";
import { Row, Col } from "../Grid";
import RodeIt from "../RodeItButton"
import "./style.css";

const CoasterCard = props => {
  return (


    <div className ="container">
      {props.coasters.map(coaster => {
        return (
          <div className="cc-section">
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
                      <p className="coasterRating">{coaster.rating}</p>
                    </Row>
                    <Row>
                    <RodeIt handleNewCoasterSubmit={props.handleNewCoasterSubmit} id={coaster._id}/>  
                      </Row>
                  </div>
                </Col>
              </Row>
            </li>
          </div>  
        );
      })}
    </div>
  )

}
export default CoasterCard
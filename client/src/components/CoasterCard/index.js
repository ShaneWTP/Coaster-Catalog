import React from "react";
import { Row, Col } from "../Grid";
import "./style.css";

const CoasterCard = props => {
    return (
        <div className="card">
            <div className="col-6">
                <div className="card-body">
                    {props.coasters.map(coaster => {
                        return (
                            <li className="card py-0 my-1" key={coaster._id}>
                                <Row className="row" id={coaster._id} >
                                    <Col size="sm-1">
                                        <div className="color-div"></div>
                                    </Col>
                                    <Col size="sm-3">
                                        <a href={"/coasters/" + coaster._id} className="stretchedLink">
                                            <div className="coasterImage my-3">
                                                <img src={coaster.img1 || "https://via.placeholder.com/150C/O"} alt={coaster.name} />
                                            </div></a>
                                    </Col>
                                    <Col size="sm-8" className="coasterInfo p-2">
                                        <Row>
                                            <h4 className="coasterName text-left px-2 my-2">{coaster.name}</h4>
                                        </Row>
                                        <Row>
                                            <p className="coasterPark text-left px-2">{coaster.park} | {coaster.location}</p>
                                        </Row>
                                        <Row>
                                            <p className="coasterRating text-left px-2">{coaster.rating}</p>
                                        </Row>
                                    </Col>
                                </Row>
                            </li>
                        );
                    })}

                </div>
            </div>
        </div>
    )
}
export default CoasterCard
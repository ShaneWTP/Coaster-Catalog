import React from "react";
import { Row, Col } from "../Grid"

const CoasterCard = props => {
    return (
        <div className="card">
            <div className="w-50 p-3">
                <div className="card-body">
                    <div className="article">
                        {props.coasters.map(coaster => {
                            return (
                                <li className="list-group-item" key={coaster.key}>
                                    <Row className="row" id={coaster._id} >
                                        <Col size="1" className="bg-primary" />
                                        <Col size="3" className="coasterImage">
                                            <img src={coaster.img1 || "https://via.placeholder.com/150C/O"} alt={coaster.name} className="rounded-circle mx-auto d-block img-fluid center-block" />
                                        </Col>
                                        <Col size="8" className="coasterInfo">
                                            <Row>
                                                {/* uncomment this when ready to make the link to the coaster page
                                        <a href="#" class="stretched-link"></a> */}
                                                <h4 className="coasterName">{coaster.name}</h4>
                                            </Row>
                                            <Row>
                                                <p className="coasterPark">{coaster.park} | {coaster.location}</p>
                                            </Row>
                                            <Row>
                                                <p className="coasterRating">{coaster.rating}</p>
                                            </Row>
                                        </Col>
                                    </Row>
                                </li>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CoasterCard
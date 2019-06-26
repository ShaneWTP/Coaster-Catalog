import React from "react";
import "./style.css";

const RodeIt = props => {
    return (
        <div>
            <div className="col-sm-12 align-self-center">
                <button  className="btn btn-success" id={props.id} onClick={props.handleNewCoasterSubmit} >I Rode It!</button>
            </div>
        </div>

    )
}
export default RodeIt
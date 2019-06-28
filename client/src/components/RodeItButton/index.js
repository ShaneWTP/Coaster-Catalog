import React from "react";
import "./style.css";

const RodeIt = props => {
  return (
    <div>
        <button className="btn" id={props.id} onClick={props.handleNewCoasterSubmit} >I Rode It! &nbsp;<i className="far fa-check-square"></i></button>
    </div>
  )
}
export default RodeIt
import React from "react";

export default ({ editComp }) => (
  <div>
    Text : {editComp.buttonFace} <br/>
    <button onClick={editComp.handleClick}>{editComp.buttonFace}</button>
  </div>
);

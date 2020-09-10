import React, { useState } from "react";
import "../App.css";

const Character = (props) => {
  const [show, setShow] = useState(false);
  const { details } = props;
  return (
    <div className="characterCard">
      <img alt={details.name} src={details.image} />
      <h3 className="name">{details.name}</h3> &nbsp;
      <div className="status">
        <h4 className={details.status}>Status: {details.status}</h4>
      </div>
      <div className="showAndHide">
        <div onClick={() => setShow(!show)}>
          {!show ? (
            <div className="showAndHide">Show Details</div>
          ) : (
            <div>
              <div className="showAndHide"> Close Details</div>
              <p>Species: {details.species}</p>
              <p>Gender: {details.gender}</p>
              <p className="origin">Origin: {details.origin.name}</p>
              <p>Current Location: {details.location.name}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Character;

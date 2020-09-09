import React from "react";
import "../App.css";

const Character = (props) => {
  const { details } = props;
  console.log(details);
  return (
    <div className="characterCard">
        <img src={details.image}/>
      <h3 className="name">{details.name}</h3>
      <div>
        <p>Species: {details.species}</p>&nbsp;
        <p className={details.status}>Status: {details.status}</p>&nbsp;
        <p>Gender: {details.gender}</p>&nbsp;
        <p className="origin">Origin: {details.origin.name}</p>
      </div>
    </div>
  );
};
export default Character;

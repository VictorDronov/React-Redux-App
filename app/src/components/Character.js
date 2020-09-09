import React from "react";

const Character = (props) => {
  const { details } = props;
  console.log(details);
  return (
    <div>
        <img src={details.image}/>
      <h3>{details.name}</h3>
      <div>
        <p>Species: {details.species}</p>
        <p>Status: {details.status}</p>
        <p>Gender: {details.gender}</p>
        <p>Origin: {details.origin.name}</p>
      </div>
    </div>
  );
};
export default Character;

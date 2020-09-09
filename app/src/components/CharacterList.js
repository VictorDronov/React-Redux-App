import React from "react";
import { connect } from "react-redux";
import Character from "./Character";

function CharacterList(props) {
  return <div>
      {
          props.characters.map((details) =>{
              return <Character key={details.id} details={details}/>
          })
      }
  </div>;
}

function mapStatetoProps(state) {
  return {
    characters: state.characters,
  };
}

export default connect(mapStatetoProps, {})(CharacterList);

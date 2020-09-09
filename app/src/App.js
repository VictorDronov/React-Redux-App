import React, { useEffect } from "react";
import "./App.css";
import { connect } from "react-redux";
import CharacterList from "./components/CharacterList";
import { fetchCharacters } from "./store/actions/index";

function App(props) {
  const { fetchCharacters, loadingCharacters, errorMessage } = props;

  useEffect(() => {
    fetchCharacters();
  }, [fetchCharacters]);

  return (
    <div className="App">
      <header>
        <h1>Your Characters</h1>
        {!loadingCharacters ? (
          <CharacterList />
        ) : (
          <div>... Finding Mr.Sanchez</div>
        )}
        {errorMessage !== "" ? <div>{errorMessage}</div> : null}
      </header>
    </div>
  );
}
function mapStateToProps(state) {
  return {
    loadingCharacters: state.loadingCharacters,
    errorMessage: state.errorMessage,
  };
}

export default connect(mapStateToProps, { fetchCharacters })(App);
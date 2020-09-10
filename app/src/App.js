import React, { useEffect, useState } from "react";
import "./App.css";
import { connect } from "react-redux";
import CharacterList from "./components/CharacterList";
import { fetchCharacters } from "./store/actions/index";

function App(props) {
  const { fetchCharacters, loadingCharacters, errorMessage } = props;
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchCharacters(page);
  }, [fetchCharacters, page]);

  return (
    <div className="App">
      <header>
        <h1>Rick and Morty Characters</h1>
      </header>
      {!loadingCharacters ? (
        <CharacterList />
      ) : (
        <div>... Finding Mr.Sanchez</div>
      )}
      {errorMessage !== "" ? <div>{errorMessage}</div> : null}
      <button
        onClick={() =>
          setPage(() => {
            if (page <= 1) {
              setPage(1);
            } else {
              setPage(page - 1);
            }
          })
        }
      >
        Prev
      </button>
      <button onClick={() => setPage(page + 1)}>Next</button>
    </div>
  );
}
function mapStateToProps(state) {
  return {
    loadingCharacters: state.loadingCharacters,
    errorMessage: state.errorMessage,
    page: state.page,
  };
}

export default connect(mapStateToProps, { fetchCharacters })(App);

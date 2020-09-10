import React, { useEffect, useState } from "react";
import "./App.css";
import { connect } from "react-redux";
import CharacterList from "./components/CharacterList";
import { fetchCharacters } from "./store/actions/index";
import ClimbingBoxLoader from "react-spinners/ScaleLoader";

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
        <h3>Page: {page}</h3>
      </header>
      <div className="pageNumbers">
        <button
          className="number"
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
        <button className="number" onClick={() => setPage(1)}>
          1
        </button>
        <button className="number" onClick={() => setPage(2)}>
          2
        </button>
        <button className="number" onClick={() => setPage(3)}>
          3
        </button>
        <button className="number" onClick={() => setPage(4)}>
          4
        </button>
        <button
          className="number"
          onClick={() =>
            setPage(() => {
              if (page >= 4) {
                setPage(1);
              } else {
                setPage(page + 1);
              }
            })
          }
        >
          Next
        </button>
      </div>
      <div className="loadingBox">
        {!loadingCharacters ? (
          <CharacterList />
        ) : (
          <div className="loading">
            {" "}
            <ClimbingBoxLoader className="loader" /> Looking For Mr.Sanchez
          </div>
        )}
      </div>
      {errorMessage !== "" ? <div>{errorMessage}</div> : null}
      <button
        className="number"
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
      <button
        className="number"
        onClick={() =>
          setPage(() => {
            if (page >= 4) {
              setPage(1);
            } else {
              setPage(page + 1);
            }
          })
        }
      >
        Next
      </button>
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

import axios from "axios";

export const FETCH_CHARACTERS = "FETCH_CHARACTERS";
export const FETCH_CHARACTERS_SUCCESS = "FETCH_CHARACTERS_SUCCESS";
export const FETCH_CHARACTERS_ERROR = "FETCH_CHARACTERS_ERROR";

export const fetchCharacters = (page) => {
  return (dispatch) => {
    dispatch({ type: FETCH_CHARACTERS });
    // setTimeout(function () {
    axios
      .get(`https://rickandmortyapi.com/api/character?page=${page}`)
      .then((res) => {
        dispatch({
          type: FETCH_CHARACTERS_SUCCESS,
          payload: res.data.results,
        });
      })
      .catch((error) => {
        dispatch({
          type: FETCH_CHARACTERS_ERROR,
          payload: { message: "Mr.Sanchez is missing!" },
        });
        console.log(error);
      });
    // }, 1000);
  };
};

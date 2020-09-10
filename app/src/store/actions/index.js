import axios from "axios";

export const FETCH_CHARACTERS = "FETCH_CHARACTERS";
export const FETCH_CHARACTERS_SUCCESS = "FETCH_CHARACTERS_SUCCESS";
export const FETCH_CHARACTERS_ERROR = "FETCH_CHARACTERS_ERROR";

export const fetchCharacters = (count) => {
  return (dispatch) => {

    dispatch({ type: FETCH_CHARACTERS });
    axios
      .get(`https://rickandmortyapi.com/api/character?page=${count}`)
      .then((res) => {
        dispatch({ type: FETCH_CHARACTERS_SUCCESS, payload: res.data.results });
        // console.log(res.data.info.next)
      })
      .catch((error) => {
        dispatch({ type: FETCH_CHARACTERS_ERROR });
        console.log(error);
      });
  };
};

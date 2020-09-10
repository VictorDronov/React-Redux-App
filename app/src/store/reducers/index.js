import {
  FETCH_CHARACTERS,
  FETCH_CHARACTERS_SUCCESS,
  FETCH_CHARACTERS_ERROR,
} from "../actions/index";

const initialState = {
  characters: [],
  loadingCharacters: true,
  errorMessage: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHARACTERS:
      return {
          ...state,
          loadingCharacters: true
      };
    case FETCH_CHARACTERS_ERROR:
      return {
          ...state,
          loadingCharacters: true,
          errorMessage: ""
      };
    case FETCH_CHARACTERS_SUCCESS:
      return {
          ...state,
          characters: action.payload,
          loadingCharacters: true
      };
    default:
      return state;
  }
};

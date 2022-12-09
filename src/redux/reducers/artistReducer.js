import { GET_ARTISTS } from "../actions";

const initialState = {
  artists: [],
};

const artistReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ARTISTS:
      return {
        ...state,
        artists: [...state.artists, action.payload],
      };
    default:
      return state;
  }
};

export default artistReducer;

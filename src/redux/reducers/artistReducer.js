import {
  GET_ARTISTS,
  GET_CMUSIC_ON_LOAD,
  GET_GYM_MUSIC_ON_lOAD,
} from "../actions";

const initialState = {
  artists: [],
  cMusicOnLoad: [],
  gymMusicOnLoad: [],
  searchedMusic: [],
};

const artistReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ARTISTS:
      return {
        ...state,
        artists: [...state.artists, action.payload],
      };
    case GET_CMUSIC_ON_LOAD:
      return {
        ...state,
        cMusicOnLoad: [...state.cMusicOnLoad, action.payload],
      };
    case GET_GYM_MUSIC_ON_lOAD:
      return {
        gymMusicOnLoad: [...state.gymMusicOnLoad, action.payload],
      };
    default:
      return state;
  }
};

export default artistReducer;

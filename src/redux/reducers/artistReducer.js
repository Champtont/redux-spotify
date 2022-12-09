import {
  GET_ARTISTS,
  GET_CMUSIC_ON_LOAD,
  GET_GYM_MUSIC_ON_lOAD,
  SET_PLAYING,
} from "../actions";

const initialState = {
  artists: [],
  gymMusicOnLoad: [],
  favoriteMusic: [],
  setPlaying: [],
};

const artistReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ARTISTS:
      return {
        ...state,
        artists: [action.payload],
      };
    case SET_PLAYING:
      return {
        ...state,
        setPlaying: [action.payload],
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

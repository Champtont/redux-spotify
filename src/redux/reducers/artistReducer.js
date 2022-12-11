import {
  GET_ARTISTS,
  GET_GYM_MUSIC_ON_lOAD,
  GET_SINGLE_ARTIST,
  GET_SINGLE_ARTIST_TOP,
  REMOVE_FAV,
  SET_FAV,
  SET_PLAYING,
} from "../actions";

const initialState = {
  artists: [],
  singleArtist: [],
  popularMusic: [],
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
    case GET_SINGLE_ARTIST:
      return {
        ...state,
        singleArtist: [action.payload],
      };
    case GET_SINGLE_ARTIST_TOP:
      return {
        ...state,
        popularMusic: [action.payload],
      };
    case SET_PLAYING:
      return {
        ...state,
        setPlaying: [action.payload],
      };
    case SET_FAV:
      return {
        ...state,
        favoriteMusic: [...state.favoriteMusic, action.payload],
      };
    case REMOVE_FAV:
      return {
        ...state,
        favoriteMusic: state.favoriteMusic.filter((song) => {
          return song !== action.payload;
        }),
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

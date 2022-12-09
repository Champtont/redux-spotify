export const GET_ARTISTS = "GET_ARTISTS";
export const GET_CMUSIC_ON_LOAD = "GET_MUSIC_ON_LOAD";
export const GET_GYM_MUSIC_ON_lOAD = "GET_GYM_MUSIC_ON_LOAD";
export const GET_USER = "GET_USER";
export const SET_PLAYING = "SET_PLAYING";

export const getArtistAction = (query) => {
  const baseEndpoint = `https://striveschool-api.herokuapp.com/api/deezer/search?q=`;

  return async (dispatch, getState) => {
    console.log("currently fetching Artists...");
    console.log(getState());
    try {
      const response = await fetch(baseEndpoint + query);
      if (response.ok) {
        const { data } = await response.json();
        console.log(data);
        dispatch({
          type: GET_ARTISTS,
          payload: data,
        });
        console.log(getState());
      } else {
        console.log("error fetching artists");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getChristmasMusicAction = () => {
  const baseEndpoint =
    "https://striveschool-api.herokuapp.com/api/deezer/search?q=Santa";

  return async (dispatch, getState) => {
    console.log("getting c music...");
    console.log(getState());
    try {
      const response = await fetch(baseEndpoint);
      if (response.ok) {
        const { data } = await response.json();
        console.log(data);
        dispatch({
          type: GET_CMUSIC_ON_LOAD,
          payload: data,
        });
        console.log(getState());
      } else {
        console.log("error fetching c music");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getGymMusicAction = () => {
  const baseEndpoint = `https://striveschool-api.herokuapp.com/api/deezer/search?q=gym`;

  return async (dispatch, getState) => {
    console.log("getting gym music...");
    console.log(getState());
    try {
      const response = await fetch(baseEndpoint);
      if (response.ok) {
        const { data } = await response.json();
        console.log(data);
        dispatch({
          type: GET_GYM_MUSIC_ON_lOAD,
          payload: data,
        });
        console.log(getState());
      } else {
        console.log("error fetching c music");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

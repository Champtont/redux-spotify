export const GET_ARTISTS = "GET_ARTISTS";
export const GET_USER = "GET_USER";

export const getAritstAction = (query) => {
  const baseEndpoint = "";

  return async (dispatch, getState) => {
    console.log("currently fetching Artists...");
    console.log(getState());
    try {
      const response = await fetch(baseEndpoint + query + "&limit=20");
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

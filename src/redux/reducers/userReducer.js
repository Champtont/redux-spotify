import { GET_USER } from "../actions";

const initialState = {
  name: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        name: [...state.name, action.payload],
      };
    default:
      return state;
  }
};

export default userReducer;

import { FETCH_DESCRIPTION } from "../actions";

const initialState = {
  skills: [],
  title: "",
  description: "",
  image: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DESCRIPTION:
      return action.payload.data;
    default:
      return state;
  }
};

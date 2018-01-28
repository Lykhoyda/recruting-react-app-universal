import { FETCH_VACANCIES } from "../actions";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_VACANCIES:
      return action.payload.data;
    default:
      return state;
  }
};

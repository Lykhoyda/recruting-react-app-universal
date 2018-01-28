import { combineReducers } from "redux";
import VacanciesReducer from "./vacanciesReducer";
import VacancyDescription from "./vacancyDescriptionReducer";

export default combineReducers({
  vacancies: VacanciesReducer,
  vacancyDescription: VacancyDescription
});

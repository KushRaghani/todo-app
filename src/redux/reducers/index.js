import { combineReducers } from "redux";
import todos from "./todoReducer";
import apiCallsInProgress from "./apiStatusReducer";
import todoActiveCategory from "./todoActiveCategoryReducer";
import todoCategory from "./todoCategoryReducer";

const rootReducer = combineReducers({
  todos,
  apiCallsInProgress,
  todoCategory,
  todoActiveCategory
});

export default rootReducer;

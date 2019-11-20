import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function todoActiveCategoryReducer(
  state = initialState.todoActiveCategory,
  action
) {
  switch (action.type) {
    case types.LOAD_TODO_ACTIVE_CATEGORY_SUCCESS:
      return action.todoActiveCategory;
    default:
      return state;
  }
}

import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function todoCategoryReducer(
  state = initialState.todoCategory,
  action
) {
  switch (action.type) {
    case types.LOAD_TODO_CATEGORY_SUCCESS:
      return action.todoCategory;
    default:
      return state;
  }
}

import * as types from "./actionTypes";
import { beginApiCall, apiCallError } from "./apiStatusActions";
import * as todoApi from "../../api/todoApi";

export function loadTodoActionsSuccess(todos) {
  return { type: types.LOAD_TODO_SUCCESS, todos };
}

export function loadTodos() {
  return function(dispatch) {
    dispatch(beginApiCall());
    return todoApi
      .getTodos()
      .then(todos => {
        dispatch(loadTodoActionsSuccess(todos));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

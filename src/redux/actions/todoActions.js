import * as types from "./actionTypes";
import { beginApiCall, apiCallError } from "./apiStatusActions";
import * as todoApi from "../../api/todoApi";

export function loadTodoActionsSuccess(todos) {
  return { type: types.LOAD_TODO_SUCCESS, todos };
}

export function addTodoSuccess(todo) {
  return { type: types.ADD_TODO_SUCCESS, todo };
}

export function toggleTodoSuccess(todo) {
  return { type: types.TOGGLE_TODO_SUCCESS, todo };
}

export function deleteTodoSuccess(todoId) {
    return { type: types.DELETE_TODO_SUCCESS, todoId };
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

export function saveTodo(todo) {
    return function(dispatch) {
      //dispatch(beginApiCall());
      return todoApi
        .saveTodo(todo)
        .then(saveTodo => {
          todo.id
          ? dispatch(toggleTodoSuccess(saveTodo))
          : dispatch(addTodoSuccess(saveTodo));
        })
        .catch(error => {
          //dispatch(apiCallError(error));
          throw error;
        });
    };
  }
  
  export function deleteTodo(todoId) {
    return function(dispatch) {
        dispatch(beginApiCall());
        return todoApi
          .deleteTodo(todoId)
          .then(() => {
            dispatch(deleteTodoSuccess(todoId));
          })
          .catch(error => {
            dispatch(apiCallError(error));
            throw error;
          });
      };
  }

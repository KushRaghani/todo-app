import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function todoReducer(state = initialState.todos, action) {
  switch (action.type) {
    case types.LOAD_TODO_SUCCESS:
      return action.todos;
    case types.ADD_TODO_SUCCESS:
        return [...state, { ...action.todo }];
    case types.TOGGLE_TODO_SUCCESS:
      return state.map(todo =>
        todo.id === action.todo.id ? action.todo : todo
      );
    case types.DELETE_TODO_SUCCESS:
      return state.filter(todo => todo.id !== action.todoId);
    default:
      return state;
  }
}

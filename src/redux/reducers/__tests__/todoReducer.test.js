import todoReducer from "../todoReducer";
import * as actions from "../../actions/todoActions";
import { todos, newTodo } from "../../../shared/mocks/mockData";

it("should add a todo when passed ADD_TODO_SUCCESS", () => {
  const initialState = todos;
  const action = actions.addTodoSuccess(newTodo);  
  const newState = todoReducer(initialState, action);
  expect(newState.length).toEqual(4);
  expect(newState[0].description).toEqual(todos[0].description);
});

it("should toggle isCompleted field of todo when passed TOGGLE_TODO_SUCCESS", () => {
  const initialState = todos;
  const todo = { id: "2", description: "Test Mock 2", isCompleted: true, categoryId: "1" };
  const action = actions.toggleTodoSuccess(todo);
  const newState = todoReducer(initialState, action);
  const updatedTodo = newState.find(a => a.id == todo.id);
  expect(updatedTodo.isCompleted).toEqual(true);
});

it("should delete todo when passed DELETE_TODO_SUCCESS", () => {
  const initialState = todos;
  const todo = { id: "2", description: "Test Mock 2", isCompleted: true, categoryId: "1" };
  const action = actions.deleteTodoSuccess(todo.id);
  const newState = todoReducer(initialState, action);
  const deletedTodo = newState.filter(a => a.id == todo.id);
  expect(deletedTodo.length).toEqual(0);
});

it("should load todos when passed LOAD_TODO_SUCCESS", () => {
  const initialState = [];
  const action = actions.loadTodoActionsSuccess(todos);
  const newState = todoReducer(initialState, action);
  expect(newState.length).toEqual(3);
  expect(newState[0].description).toEqual(todos[0].description);
});

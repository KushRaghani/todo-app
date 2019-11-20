import { createStore } from "redux";
import rootReducer from "../reducers";
import initialState from "../reducers/initialState";
import * as todoActions from "../actions/todoActions";

it("should handle adding a todo", function() {
  const store = createStore(rootReducer, initialState);
  const todo = {
    description: "Add todo through store test",
    categoryId: "1",
    isCompleted: false
  };

  const action = todoActions.addTodoSuccess(todo);
  store.dispatch(action);

  const addTodo = store.getState().todos[0];
  expect(addTodo).toEqual(todo);
});

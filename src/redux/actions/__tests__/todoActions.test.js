import * as todoActions from "../todoActions";
import * as types from "../actionTypes";
import { todos } from "../../../shared/mocks/mockData";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import configureMockStore from "redux-mock-store";

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe("Async Actions", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  describe("Load Todos Thunk", () => {
    it("should create BEGIN_API_CALL and LOAD_TODO_SUCCESS when loading todos", () => {
      fetchMock.mock("*", {
        body: todos,
        headers: { "content-type": "application/json" }
      });

      const expectedActions = [
        { type: types.BEGIN_API_CALL },
        { type: types.LOAD_TODO_SUCCESS, todos }
      ];

      const store = mockStore({ todos: [] });
      return store.dispatch(todoActions.loadTodos()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});

describe("addTodoSuccess", () => {
  it("should create a ADD_TODO_SUCCESS action", () => {
   
    const todo = todos[0];
    const expectedAction = {
      type: types.ADD_TODO_SUCCESS,
      todo
    };

    const action = todoActions.addTodoSuccess(todo);
    expect(action).toEqual(expectedAction);
  });
});

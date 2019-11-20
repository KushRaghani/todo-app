import todoCategoryReducer from "../todoCategoryReducer";
import * as actions from "../../actions/todoCategoryActions";
import { todoCategory } from "../../../shared/mocks/mockData";

it("should load todoCategory when passed LOAD_TODO_CATEGORY_SUCCESS", () => {
  const initialState = [];
  const action = actions.loadTodoCategoryActionsSuccess(todoCategory);
  const newState = todoCategoryReducer(initialState, action);
  expect(newState.length).toEqual(1);
  expect(newState[0].name).toEqual(todoCategory[0].name);
});

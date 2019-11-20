import todoActiveCategoryReducer from "../todoActiveCategoryReducer";
import * as actions from "../../actions/todoCategoryActions";
import { todoCategory } from "../../../shared/mocks/mockData";

it("should load todoActiveCategory when passed LOAD_TODO_ACTIVE_CATEGORY_SUCCESS", () => {
  const initialState = { id: "", name: "" };
  const action = actions.loadTodoActiveCategoryActionsSuccess(todoCategory[0]);
  const newState = todoActiveCategoryReducer(initialState, action);
  expect(newState.active).toEqual(true);
});

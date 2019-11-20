import * as types from "./actionTypes";
//import { beginApiCall, apiCallError } from "./apiStatusActions";
import * as todoApi from "../../api/todoApi";

export function loadTodoCategoryActionsSuccess(todoCategory) {
  return { type: types.LOAD_TODO_CATEGORY_SUCCESS, todoCategory };
}

export function loadTodoActiveCategoryActionsSuccess(todoActiveCategory) {
  return { type: types.LOAD_TODO_ACTIVE_CATEGORY_SUCCESS, todoActiveCategory };
}

export function loadTodosCategory() {
  return function(dispatch) {
    //dispatch(beginApiCall());
    return todoApi
      .getTodosCategory()
      .then(todoCategory => {
        dispatch(loadTodoCategoryActionsSuccess(todoCategory));
        const todoActiveCategory = todoCategory.filter(
          todoCategory => todoCategory.active === true
        );
        dispatch(loadTodoActiveCategoryActionsSuccess(todoActiveCategory[0]));
      })
      .catch(error => {
        //dispatch(apiCallError(error));
        throw error;
      });
  };
}

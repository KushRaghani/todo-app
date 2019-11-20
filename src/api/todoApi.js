import { handleResponse, handleError } from "./apiUtils";
const todosBaseUrl = process.env.API_URL + "/todos/";
const todosCategoryBaseUrl = process.env.API_URL + "/todoCategory/";

export function getTodos() {
  return fetch(todosBaseUrl)
    .then(handleResponse)
    .catch(handleError);
}

export function saveTodo(todo) {
  return fetch(todosBaseUrl + (todo.id || ""), {
    method: todo.id ? "PUT" : "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(todo)
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteTodo(todoId) {
  return fetch(todosBaseUrl + todoId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}

export function getTodosCategory() {
    return fetch(todosCategoryBaseUrl)
    .then(handleResponse)
    .catch(handleError); 
}
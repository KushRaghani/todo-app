const todos = [
  {
    id: "1",
    description: "Test mock 1",
    isCompleted: false,
    categoryId: "1"
  },
  {
    id: "2",
    description: "Test mock 2",
    isCompleted: true,
    categoryId: "1"
  },
  {
    id: "3",
    description: "Test mock 3",
    isCompleted: false,
    categoryId: "1"
  }
];

const todoCategory = [
  {
    id: "1",
    name: "Team To-Do List",
    active: true
  }
];

const newTodo = {
  description: "Test mock",
  isCompleted: false,
  categoryId: "1"
};

module.exports = {
  newTodo,
  todos,
  todoCategory
};

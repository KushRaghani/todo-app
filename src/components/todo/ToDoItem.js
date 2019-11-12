import React from "react";
import PropType from "prop-types";

const ToDoItem = props => {
  return (
    <React.Fragment>
      <input type="checkbox" />
      <span>{props.todoText}</span>
      <button type="button">Delete</button>
      <br />
    </React.Fragment>
  );
};

ToDoItem.propTypes = {
  todoText: PropType.string
};

export default ToDoItem;

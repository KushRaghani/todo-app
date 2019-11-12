import React from "react";

const ToDoHeader = () => {
  return (
    <React.Fragment>
      <h1>Team To-Do List</h1>
      <p>{new Date().toISOString()}</p>
    </React.Fragment>
  );
};

export default ToDoHeader;

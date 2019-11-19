import React, { Component } from "react";
import PropType from "prop-types";
import ToDoHeader from "./ToDoHeader";
import ToDoItem from "./ToDoItem";

class ToDo extends Component {
  render() {
    return (
      <main>
        <ToDoHeader />
        {this.props.todos.map(i => {
          return <ToDoItem key={i.id} todoText={i.todoText} />;
        })}
      </main>
    );
  }
}

ToDo.propTypes = {
  todos: PropType.array
};

export default ToDo;

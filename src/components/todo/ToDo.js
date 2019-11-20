import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import ToDoHeader from "./ToDoHeader";
import ToDoItem from "./ToDoItem";
import ToDoForm from "./ToDoForm";
import * as todoActions from "../../redux/actions/todoActions";
import { getTodoDateFormat } from "../../shared/utils/dateUtil";

const ToDoContent = styled.div`
  box-shadow: 0px 0px 5px 0px #aaaaaa;
  padding: 0 0.5em;
`;

class ToDo extends Component {
  componentDidMount() {
    const { todos, actions } = this.props;

    if (todos.length === 0) {
      actions.loadTodos().catch(error => {
        console.log("error in loading todo", error);
      });
    }
  }

  toggleTodo = async todo => {
    try {
      await this.props.actions.toggleTodo(todo);
    } catch (error) {
      console.log("error in adding todo", error);
    }
  };

  deleteTodo = async id => {
    try {
      await this.props.actions.deleteTodo(id);
    } catch (error) {
      console.log("error in delete todo", error);
    }
  };

  onAddingTodo = async todo => {
    try {
      await this.props.actions.addTodo(todo);
    } catch (error) {
      console.log("error in adding todo", error);
    }
  };

  render() {
    const { todos, loading, todoActiveCategoryName } = this.props;
    return (
      <main>
        <ToDoHeader
          todoCategoryName={todoActiveCategoryName}
          timestamp={getTodoDateFormat(new Date())}
        />
        <ToDoContent>
          {loading ? (
            <>Loading...</>
          ) : (
            todos.map(i => {
              return (
                <ToDoItem
                  key={i.id}
                  id={i.id}
                  description={i.description}
                  isCompleted={i.isCompleted}
                  categoryId={i.categoryId}
                  onToggle={this.toggleTodo}
                  onDelete={this.deleteTodo}
                />
              );
            })
          )}
          <ToDoForm onAddingTodo={this.onAddingTodo} />
        </ToDoContent>
      </main>
    );
  }
}

ToDo.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  todoActiveCategoryName: PropTypes.string.isRequired
};

function mapStateToProps(state) {
  return {
    todos: state.todos.filter(
      todo => todo.categoryId === state.todoActiveCategory.id
    ),
    loading: state.apiCallsInProgress > 0,
    todoActiveCategoryName: state.todoActiveCategory.name
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      addTodo: bindActionCreators(todoActions.saveTodo, dispatch),
      loadTodos: bindActionCreators(todoActions.loadTodos, dispatch),
      toggleTodo: bindActionCreators(todoActions.saveTodo, dispatch),
      deleteTodo: bindActionCreators(todoActions.deleteTodo, dispatch)
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDo);

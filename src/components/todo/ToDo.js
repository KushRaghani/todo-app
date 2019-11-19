import React, { Component } from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import ToDoHeader from "./ToDoHeader";
import ToDoItem from "./ToDoItem";
import * as todoActions from "../../redux/actions/todoActions";

class ToDo extends Component {
  componentDidMount() {
    const { todos, actions } = this.props;

    if (todos.length === 0) {
      actions.loadTodos().catch(error => {
        alert("Loading todos failed" + error);
      });
    }
  }

  render() {
    const { todos, loading } = this.props;
    return (
      <main>
        <ToDoHeader />
        {loading ? (
          <>Loading...</>
        ) : (
          todos.map(i => {
            return <ToDoItem key={i.id} todoText={i.todoText} />;
          })
        )}
      </main>
    );
  }
}

ToDo.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    todos: state.todos,
    loading: state.apiCallsInProgress > 0
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadTodos: bindActionCreators(todoActions.loadTodos, dispatch)
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDo);

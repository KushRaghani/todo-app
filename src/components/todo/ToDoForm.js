import React, { useState } from "react";
import PropTypes from "prop-types";
import styled, { withTheme } from "styled-components";
import AddIcon from "../common/icons/AddIcon";

const ToDoLabel = styled.label`
  margin-left: 10px;
`;

const ToDoFormContainer = styled.div`
  height: 100px;
  background-color: ${props => props.theme.lightGrey};
  padding: 0.5em 1.5em;
  display: flex;
  align-items: flex-start;
`;

const ToDoForm = ({ onAddingTodo, theme }) => {
  const [showInput, setShowInput] = useState(false);
  const [updateInput, setUpdateInput] = useState("");

  const addTodo = () => {
    onAddingTodo({
      description: updateInput,
      isCompleted: false,
      categoryId: "1"
    });
    setUpdateInput("");
    setShowInput(!showInput);
  };
  return (
    <ToDoFormContainer>
      <AddIcon onClick={() => setShowInput(!showInput)} fill={theme.primary} />
      {showInput && (
        <>
          <input
            placeholder="Add a to-do"
            value={updateInput}
            onChange={e => {
              setUpdateInput(e.target.value);
            }}
          />
          <button onClick={addTodo}>Add</button>
        </>
      )}
      {!showInput && <ToDoLabel>Add a to-do</ToDoLabel>}
    </ToDoFormContainer>
  );
};

ToDoForm.propTypes = {
  onAddingTodo: PropTypes.func.isRequired,
  theme: PropTypes.object
};

export default withTheme(ToDoForm);

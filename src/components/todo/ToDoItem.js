import React, { useState } from "react";
import PropType from "prop-types";
import { withTheme } from "styled-components";
import Checkbox from "./../common/Checkbox";
import Group from "../common/Group";
import TrashIcon from "../common/icons/TrashIcon";

const ToDoItem = ({ todoText, ...props }) => {
  const [showDeleteBtn, setShowDeleteBtn] = useState(false);
  const [checkToDoItem, setCheckToDoItem] = useState(false);
  const handleCheckboxChange = event => {
    setCheckToDoItem(event.target.checked);
  };
  return (
    <Group
      onMouseEnter={() => {
        setShowDeleteBtn(true);
      }}
      onMouseLeave={() => {
        setShowDeleteBtn(false);
      }}
      style={{ justifyContent: "space-between" }}
    >
      <Checkbox
        checked={checkToDoItem}
        onChange={handleCheckboxChange}
        checkBoxLabel={todoText}
      />
      {showDeleteBtn && <TrashIcon fill={props.theme.primary} />}
    </Group>
  );
};

ToDoItem.propTypes = {
  todoText: PropType.string
};

export default withTheme(ToDoItem);

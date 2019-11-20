import React, { useState } from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";
import Checkbox from "./../common/Checkbox";
import Group from "../common/Group";
import TrashIcon from "../common/icons/TrashIcon";

const ToDoItem = ({ description, id, isCompleted, categoryId, ...props }) => {
  const [showDeleteBtn, setShowDeleteBtn] = useState(false);

  const handleCheckboxChange = event => {
    props.onToggle({
      isCompleted: event.target.checked,
      id: event.target.id,
      description,
      categoryId
    });
  };

  const handleDelete = event => {
    props.onDelete(event.target.parentNode.attributes.datatodoid.value);
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
        checked={isCompleted}
        onChange={handleCheckboxChange}
        checkBoxLabel={description}
        id={id}
      />
      {showDeleteBtn && (
        <TrashIcon
          todoId={id}
          fill={props.theme.primary}
          onClick={handleDelete}
        />
      )}
    </Group>
  );
};

ToDoItem.propTypes = {
  description: PropTypes.string,
  id: PropTypes.string,
  isCompleted: PropTypes.bool,
  categoryId: PropTypes.string,
  onToggle: PropTypes.func,
  onDelete: PropTypes.func,
  theme: PropTypes.object
};

export default withTheme(ToDoItem);

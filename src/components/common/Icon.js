import * as React from "react";
import PropTypes from "prop-types";

const Icon = ({ children, className, onClick, fill, todoId, ...rest }) => {
  const size = rest.size ? rest.size + "px" : "24px";
  return (
    <svg
      fill={fill}
      width={size}
      height={size}
      {...rest}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={onClick}
      datatodoid={todoId}
    >
      {children}
    </svg>
  );
};

Icon.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  size: PropTypes.number,
  fill: PropTypes.string,
  onClick: PropTypes.func,
  todoId: PropTypes.string
};

export default Icon;

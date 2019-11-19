import * as React from "react";
import PropTypes from "prop-types";

const Icon = ({ children, className, onClick, fill, ...rest }) => {
  const size = rest.size ? rest.size + "px" : "24px";
  return (
    <svg
      fill={fill}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={onClick}
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
  onClick: PropTypes.func
};

export default Icon;

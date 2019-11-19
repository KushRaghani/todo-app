import React from "react";
import styled, { withTheme } from "styled-components";
import PropTypes from "prop-types";

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

const Icon = styled.svg`
  fill: none;
  stroke: ${props => props.theme.white};
  stroke-width: 2px;
`;

const Label = styled.span`
  margin-left: 10px;
  text-decoration: ${props => (props.checked ? "line-through" : "none")};
  color: ${props =>
    props.checked ? props.theme.darkGrey : props.theme.lightBlack};
`;

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 25px;
  height: 25px;
  background: ${props =>
    props.checked ? props.theme.checkboxColor : props.theme.white};
  border-radius: 3px;
  transition: all 150ms;
  border: 1px solid ${props =>
    props.checked ? props.theme.checkboxColor : props.theme.darkGrey};
  ${Icon} {
    visibility: ${props => (props.checked ? "visible" : "hidden")};
  }
`;

const Checkbox = ({ className, checked, checkBoxLabel, ...props }) => (
  <label>
    <CheckboxContainer className={className}>
      <HiddenCheckbox checked={checked} {...props} />
      <StyledCheckbox checked={checked}>
        <Icon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </StyledCheckbox>
    </CheckboxContainer>
    <Label checked={checked}>{checkBoxLabel}</Label>
  </label>
);

Checkbox.propTypes = {
  className: PropTypes.string,
  checked: PropTypes.bool.isRequired,
  checkBoxLabel: PropTypes.string.isRequired
};

export default withTheme(Checkbox);

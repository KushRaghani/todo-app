import styled, { withTheme } from "styled-components";

const Group = styled.div`
  width: 100%;
  background-color: ${props => props.theme.white};
  &:hover {
    background-color: ${props => props.theme.lightPurple};
  }
  padding: 0.5em 1.25em;
  display: flex;
  align-items: center;
  &.active {
    background-color: ${props => props.theme.lightPurple};
  }
`;

export default withTheme(Group);

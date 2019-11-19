import styled, { withTheme } from "styled-components";

const Group = styled.div`
  width: 100%;
  background-color: ${props => props.theme.white};
  &:hover {
    background-color: ${props => props.theme.lightPurple};
  }
  padding: 0.5em 1.5em;
  display: flex;
  align-items: center;
`;

export default withTheme(Group);

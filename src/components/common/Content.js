import styled, { withTheme } from "styled-components";

const Content = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto 2em;
  border: 1px solid ${props => props.theme.lightGrey};
`;

export default withTheme(Content);

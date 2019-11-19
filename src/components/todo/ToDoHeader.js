import React from "react";

import styled, { withTheme } from "styled-components";

import headerImg from "../../assets/images/todo-background.jpg";

const Header = styled.div`
  width: 100%;
  padding: 7em 1.5em 2em;
  position: relative;
  text-align: left;
  background-image: url(${headerImg});

  p {
    font-size: 1.2em;
    font-weight: 500;
    color: ${props => props.theme.white};
    margin: 0;
  }
  h1 {
    font-size: 2.5em;
    margin: 0 0 0.1em;
    color: ${props => props.theme.white};
  }
`;

const ToDoHeader = () => {
  return (
    <React.Fragment>
      <Header>
        <h1>Team To-Do List</h1>
        <p>{new Date().toISOString()}</p>
      </Header>
    </React.Fragment>
  );
};

export default withTheme(ToDoHeader);

import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import styled, { withTheme } from "styled-components";
import ListIcon from "../common/icons/ListIcon";
import Group from "../common/Group";

import * as todoCategoryActions from "../../redux/actions/todoCategoryActions";
import profileImg from "../../assets/images/profile.png";

const Aside = styled.aside`
  width:100%;
  padding 0 0.5em;
`;

const UserProfile = styled("section")`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: 600;
  & > img {
    border-radius: 50%;
    margin-right: 10px;
    width: 50px;
  }
  padding: 1em 0.5em 2em;
`;

const SideBar = props => {
  useEffect(() => {
    props.actions.loadTodosCategory().catch(error => {
      alert("Loading todos category failed" + error);
    });
  }, []);
  return (
    <Aside>
      <UserProfile>
        <img src={profileImg} alt={"profile image"} />
        <span>{"Guglielmo Marconi"}</span>
      </UserProfile>
      {props.todoCategory.map(i => {
        return (
          <Group
            key={i.id}
            className={i.active ? "active" : ""}
            onClick={() => props.actions.toggleTodosCategory(i)}
          >
            <ListIcon fill={props.theme.darkGrey} /> <span>{i.name}</span>
          </Group>
        );
      })}
    </Aside>
  );
};

SideBar.propTypes = {
  todoCategory: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    todoCategory: state.todoCategory
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadTodosCategory: bindActionCreators(
        todoCategoryActions.loadTodosCategory,
        dispatch
      ),
      toggleTodosCategory: bindActionCreators(
        todoCategoryActions.toggleTodosCategory,
        dispatch
      )
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(withTheme(SideBar));

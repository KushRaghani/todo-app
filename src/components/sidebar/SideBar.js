import React from "react";
import ListIcon from "../common/icons/ListIcon";
import Group from "../common/Group";
const SideBar = () => {
  return (
    <aside>
      <h1>Profile</h1>
      <Group >
        <ListIcon fill={'#e7e7e7'} /> <span>Team To-Do List </span>
      </Group>
    </aside>
  );
};

export default SideBar;

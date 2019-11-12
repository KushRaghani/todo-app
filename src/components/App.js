import React from "react";
import SideBar from "./sidebar/SideBar";
import ToDo from "./todo/ToDo";

const App = () => {
  return (
    <div className="main-app">
      <SideBar />
      <ToDo
        todos={[{ id: 1, todoText: "todo 1" }, { id: 2, todoText: "todo 2" }]}
      />
    </div>
  );
};

export default App;

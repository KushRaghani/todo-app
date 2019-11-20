import React from "react";
import Grid from "styled-components-grid";
import Content from "./common/Content";
import SideBar from "./sidebar/SideBar";
import ToDo from "./todo/ToDo";

const App = () => {
  return (
    <Grid>
      <Content>
        <Grid>
          <Grid.Unit
            size={{ tablet: 1 / 4 }}
          >
            <SideBar />
          </Grid.Unit>
          <Grid.Unit size={{ tablet: 3 / 4 }}>
            <ToDo />
          </Grid.Unit>
        </Grid>
      </Content>
    </Grid>
  );
};

export default App;

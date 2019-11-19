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
            visible={{ mobile: false, tablet: true }}
          >
            <SideBar />
          </Grid.Unit>
          <Grid.Unit size={{ tablet: 3 / 4 }}>
            <ToDo
              todos={[
                { id: 1, todoText: "Shortlist features for MVP" },
                { id: 2, todoText: "todo 2" }
              ]}
            />
          </Grid.Unit>
        </Grid>
      </Content>
    </Grid>
  );
};

export default App;

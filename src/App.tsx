import React from "react";
import {
  Container,
  Drawer,
  GlobalStyles,
  Main,
} from "./styledComponents/landing";
import DrawerSection from "./DrawerSection";
import ChartSection from "./ChartSection";

function App() {
  return (
    <React.Fragment>
      <GlobalStyles />
      <Container>
        <Main>
          <ChartSection />
        </Main>
        <Drawer>
          <DrawerSection />
        </Drawer>
      </Container>
    </React.Fragment>
  );
}

export default App;

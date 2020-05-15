import React from "react";
import logo from "./GitHub-Mark-Light-64px.png";
import styled from "styled-components";

import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";

const AppWrapper = styled.div`
  text-align: center;
`;

function App() {
  return (
    <AppWrapper>
      <Header logo={logo} />
      <Profile />
    </AppWrapper>
  );
}

export default App;

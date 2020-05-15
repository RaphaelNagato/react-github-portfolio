import React from "react";
import logo from "./GitHub-Mark-Light-64px.png";
import "./App.css";

import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <div className="App">
      <Header logo={logo} />
      <Profile />
    </div>
  );
}

export default App;

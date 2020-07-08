import React from "react";
import "./App.scss";

import Header from "./components/Header/Header";
import Balance from "./components/Balance/Balance";

const App = () => {
  return (
    <div className="container">
      <div className="app-wrapper">
        <Header />
        <Balance />
      </div>
    </div>
  );
};

export default App;

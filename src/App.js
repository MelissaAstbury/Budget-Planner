import React from "react";
import "./App.scss";

import Header from "./components/Header/Header";
import Balance from "./components/Balance/Balance";
import AddTransaction from "./components/AddTransaction/AddTransaction";

const App = () => {
  return (
    <div className="container">
      <div className="app-wrapper">
        <Header />
        <Balance />
        <AddTransaction />
      </div>
    </div>
  );
};

export default App;

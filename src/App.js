import React from "react";
import "./App.scss";

import Header from "./components/Header/Header";
import Balance from "./components/Balance/Balance";
import AddTransaction from "./components/AddTransaction/AddTransaction";
import IncomeList from "./components/IncomeList/IncomeList";
import ExpenseList from "./components/ExpenseList/ExpenseList";

const App = () => {
  return (
    <div className="container">
      <div className="app-wrapper">
        <Header />
        <Balance />
        <AddTransaction />
        <IncomeList />
        <ExpenseList />
      </div>
    </div>
  );
};

export default App;

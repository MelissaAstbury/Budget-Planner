import React from "react";
import "./App.scss";

import Header from "./components/Header/Header";
import Balance from "./components/Balance/Balance";
import AddTransaction from "./components/AddTransaction/AddTransaction";
import IncomeList from "./components/IncomeList/IncomeList";
import ExpenseList from "./components/ExpenseList/ExpenseList";
import { GlobalContextProvider } from "./components/context/GlobalState";

const App = () => {
  return (
    <GlobalContextProvider>
      <div className="container">
        <div className="app-wrapper">
          <Header />
          <Balance />
          <AddTransaction />
          <IncomeList />
          <ExpenseList />
        </div>
      </div>
    </GlobalContextProvider>
  );
};

export default App;

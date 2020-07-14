import React, { useContext, useReducer, createContext } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  incomeTransactions: [
    { id: 1, incomeText: "Freelance", incomeAmount: 1300 },
    { id: 2, incomeText: "Salary", incomeAmount: 2600 },
    { id: 3, incomeText: "Baby Sitting", incomeAmount: 500 },
  ],
  expenseTransactions: [
    { id: 4, expenseText: "Rent", expenseAmount: 650 },
    { id: 5, expenseText: "Phone", expenseAmount: 50 },
    { id: 6, expenseText: "Food Shopping", expenseAmount: 350 },
  ],
};

export const GlobalContext = createContext(initialState);

export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const addIncome = (incomeTransaction) => {
    dispatch({
      type: "ADD_INCOME",
      payload: incomeTransaction,
    });
  };

  const addExpense = (expenseTransaction) => {
    dispatch({
      type: "ADD_EXPENSE",
      payload: expenseTransaction,
    });
  };

  const deleteTransaction = (id) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        incomeTransactions: state.incomeTransactions,
        expenseTransactions: state.expenseTransactions,
        addIncome,
        addExpense,
        deleteTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

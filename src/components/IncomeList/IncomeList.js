import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const IncomeList = () => {
  return (
    <div className="transactions transactions-income">
      <h2>Transaction History</h2>
      <ul className="transaction-list">
        <li className="transaction">
          <span className="transaction-text">Salaray</span>
          <span className="transaction-amount">£3000</span>
          <button className="delete-btn">
            <i className="fas fa-trash"></i>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default IncomeList;

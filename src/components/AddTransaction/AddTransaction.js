import React, { useState } from "react";

const AddTransaction = () => {
  const [income, setIncome] = useState({
    incomeText: "",
    incomeAmount: 0,
  });

  const onChangeIncome = (e) => {
    //this will access the exact property value
    // "...income" - this keeps the text and the number instead of the number over writting the text
    setIncome({ ...income, [e.target.name]: e.target.value });
    console.log(income);
  };

  return (
    <div className="form-wrapper">
      <form>
        <div className="input-group income">
          <input
            type="text"
            name="incomeText"
            placeholder="Add Income..."
            autoComplete="off"
            onChange={onChangeIncome}
          />
          <input
            type="number"
            name="incomeAmount"
            placeholder="Amount"
            autoComplete="off"
            onChange={onChangeIncome}
          />
          <input type="submit" value="submit" />
        </div>
      </form>
      <form>
        <div className="input-group expense">
          <input type="text" placeholder="Add Expense..." autoComplete="off" />
          <input type="number" placeholder="Amount" autoComplete="off" />
          <input type="submit" value="submit" />
        </div>
      </form>
    </div>
  );
};

export default AddTransaction;

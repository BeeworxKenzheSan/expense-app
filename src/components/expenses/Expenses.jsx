// more expenses components will be added here
import { ExpenseItem } from "../expense-item/ExpenseItem";
import PropTypes from "prop-types";
import css from "./Expenses.module.css";
import { ExpenseFilter } from "../expense-filter/ExpenseFilter";
import { useState } from "react";
import ExpensesChart from "../ExpenseChart";

export const Expenses = ({ expenses }) => {
  const [selectedYear, setSelectedYear] = useState("All");

  const yearChangeHandler = () => {
    setSelectedYear(event.target.value);
  };

  const filteredExpenses = expenses.filter((expense) => {
    if (expense.date.getFullYear().toString() === selectedYear) {
      return true;
    }
    return false;
  });

  const renderedExpenses = selectedYear === "All" ? expenses : filteredExpenses;
  return (
    <ul className={css.expenseWrapper}>
      <ExpenseFilter value={selectedYear} onChange={yearChangeHandler} />
      <ExpensesChart expenses={renderedExpenses} />
      {renderedExpenses.map((item) => {
        return (
          <ExpenseItem
            key={item.id}
            title={item.title}
            date={item.date}
            price={item.price}
          />
        );
      })}
    </ul>
  );
};

Expenses.propTypes = {
  expenses: PropTypes.array.isRequired,
};

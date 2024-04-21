// more expenses components will be added here
import { ExpenseItem } from "../expense-item/ExpenseItem";
import PropTypes from "prop-types";
import css from "./Expenses.module.css";
import { ExpenseFilter } from "../expense-filter/ExpenseFilter";
import { useState } from "react";

export const Expenses = ({ expenses }) => {
  const [selectedYear, setSelectedYear] = useState("2024");

  const yearChangeHandler = () => {
    setSelectedYear(event.target.value);
  };
  const filteredExpenses = expenses.filter((item) => {
    return item.date.getFullYear().toString() === selectedYear;
  });
  return (
    <ul className={css.expenseWrapper}>
      <ExpenseFilter value={selectedYear} onChange={yearChangeHandler} />
      {filteredExpenses.map((item) => {
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

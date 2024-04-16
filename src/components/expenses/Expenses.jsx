// more expenses components will be added here
import { ExpenseItem } from "../expense-item/ExpenseItem";
import PropTypes from "prop-types";

export const Expenses = ({ expenses }) => {
  return (
    <ul>
      {expenses.map((item) => {
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

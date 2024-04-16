// more expenses components will be added here
import { ExpenseItem } from "../expense-item/ExpenseItem";

const Expenses = () => {
  return (
    <ul>
      {[].map(() => {
        return <ExpenseItem />;
      })}
    </ul>
  );
};

export default Expenses;

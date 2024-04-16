import Button from "../UI/Button/Button";
import { ExpenseForm } from "../expense-form/ExpenseForm";
import css from "./NewExpense.module.css";
export const NewExpense = () => {
  return (
    <div className={css.newExpenseStyles}>
      <Button title="Добавить новый расход" />
      <ExpenseForm />
    </div>
  );
};

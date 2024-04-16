import Button from "../UI/Button/Button";
import { ExpenseForm } from "../expense-form/ExpenseForm";

export const NewExpense = () => {
  return (
    <div>
      <Button title="Добавить новый расход" />
      <ExpenseForm />
    </div>
  );
};

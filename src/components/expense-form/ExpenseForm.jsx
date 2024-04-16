import Button from "../UI/Button/Button";
import { FormInput } from "../UI/FormInput/FormInput";

export const ExpenseForm = () => {
  return (
    <form>
      <FormInput label="Название" id="title" type="text" />
      <FormInput label="Цена" id="price" type="number" />
      <FormInput label="Дата" id="date" type="date" />
      <Button title="Добавить расход" />
      <Button title="Отмена" />
    </form>
  );
};

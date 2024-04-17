import Button from "../UI/Button/Button";
import { FormInput } from "../UI/FormInput/FormInput";
import css from "./ExpenseForm.module.css";

import PropTypes from "prop-types";

export const ExpenseForm = ({ onShowForm }) => {
  const cancelHandler = (event) => {
    event.preventDefault();
    onShowForm();
  };

  const saveHandler = (event) => {
    event.preventDefault();
    const title = document.getElementById("title").value;
    const price = document.getElementById("price").value;
    const date = document.getElementById("date").value;

    const expenseData = {
      title,
      price,
      date,
    };
    console.log(expenseData);
  };
  return (
    <form>
      <div className={css.formInputContainer}>
        <FormInput labelName="Заголовок" id="title" inputType="text" />
        <FormInput labelName="Количество" id="price" inputType="number" />
      </div>
      <FormInput labelName="Датировать" id="date" inputType="date" />
      <div className={css.formInputFooter}>
        <Button
          title="Отмена"
          styles={css.buttonSpace}
          onClick={cancelHandler}
        />
        <Button title="Добавить расход" onClick={saveHandler} />
      </div>
    </form>
  );
};

ExpenseForm.propTypes = {
  onShowForm: PropTypes.func.isRequired,
};

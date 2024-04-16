import PropTypes from "prop-types";

export const ExpenseItem = ({ title, date, price }) => {
  return (
    <div>
      <div>{date.toISOString()}</div>
      <div>{title}</div>
      <div>{price}</div>
    </div>
  );
};

ExpenseItem.propTypes = {
  title: PropTypes.string,
  date: PropTypes.instanceOf(Date),
  price: PropTypes.number,
};

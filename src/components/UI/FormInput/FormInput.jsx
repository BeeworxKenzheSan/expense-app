import PropTypes from "prop-types";

export const FormInput = ({ labelName, placeholder, inputType, id }) => {
  return (
    <div>
      <label htmlFor={id}>{labelName}</label>
      <input type={inputType} placeholder={placeholder || "..."} id={id} />
    </div>
  );
};

FormInput.propTypes = {
  labelName: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  inputType: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

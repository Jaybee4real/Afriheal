import React from "react";

import "../styles/form-input.scss";

const FormInput = ({ type, name, value, onChange, ...otherProps }) => (
  <div className="group">
    <input
      type={type}
      name={name}
      value={value}
      className="form-input"
      onChange={onChange}
      {...otherProps}
    />
  </div>
);

export default FormInput;

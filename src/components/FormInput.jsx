import React from "react";
import { forwardRef } from "react";

const FormInput = forwardRef(
  ({ type, placeholder, onChange, onBlur, name, label, errorC }, ref) => {
    return (
      <div className="">
        <label htmlFor="email" className={errorC.colorErrorLabel}>
          {label}
        </label>
        <input
          type={type}
          placeholder={placeholder}
          ref={ref}
          onChange={onChange}
          onBlur={onBlur}
          name={name}
          className={errorC.colorErrorInput}
        />
      </div>
    );
  }
);

export default FormInput;

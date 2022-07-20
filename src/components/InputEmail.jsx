import React from "react";

const InputEmail = ({register}) => {
  return (
    <input
      type="email"
      placeholder="Ingrese Email"
      {...register("email", {
        required: {
          value: true,
          message: "Campo obligatorio",
        },
        pattern: {
          value: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/,
          message: "Formato de email incorrecto",
        },
      })}
    />
  );
};

export default InputEmail;

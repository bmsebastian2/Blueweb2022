import React from "react";

const InputRepassword = ({ register, getValues }) => {
  return (
    <input
      type="password"
      placeholder="Ingrese password"
      {...register("repassword", {
        validate: {
          equals: (valor) =>
            valor === getValues("password") || "No coinciden las contraseñas",
        },
      })}
    />
  );
};

export default InputRepassword;

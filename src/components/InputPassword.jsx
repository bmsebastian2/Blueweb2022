import React from "react";



const InputPassword = ({ register }) => {
  return (
    <input
      type="password"
      placeholder="Ingrese password"
      {...register("password", {
        minLength: {
          value: 6,
          message: "Minimos 6 caracteres",
        },
        validate: {
          eq: (va) =>
            va.trim() !== "" ||
            "Clave en blanco / son todos espacio en blancos",
        },
      })}
    />
  );
};

export default InputPassword;

const formValidate = (getValues) => {
  return {
    required: {
      value: true,
      message: "Campo obligatorio.",
    },
    patternEmail: {
      value: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/,
      message: "Formato de email incorrecto",
    },
    minLength: {
      value: 6,
      message: "Minimos 6 caracteres",
    },
    validateBlanco: {
      eq: (va) =>
        va.trim() !== "" || "Clave en blanco // son todos espacio en blancos",
    },
    validateEquals(getValues) {
      return {
        equals: (valor) =>
          valor === getValues("password") || "No coinciden las contraseñas",
      };
    },
    //
    //
  };
};

export default formValidate;

const formValidate = () => {
  return {
    required: {
      value: true,
      message: "Campo obligatorio.",
    },
    patternEmail: {
      value: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/,
      message: "Formato de email incorrecto",
    },
    funcMinlength(number) {
      return {
        value: number,
        message: "Minimos 6 caracteres",
      };
    },
    validateBlanco: (v) =>
      v.trim() !== "" || "Clave en blanco // son todos espacio en blancos",
    validateEqual(value) {
      return {
        equals: (valor) => valor === value || "No coinciden las contraseñas",
      };
    },
  };
};

export default formValidate;

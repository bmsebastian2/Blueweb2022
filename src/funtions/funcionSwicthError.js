const swicthError = (error) => {
  switch (error) {
    case "auth/wrong-password":
      return { indice: "password", message: "Error contraseña." };
      break;
    case "auth/user-not-found":
      return { indice: "email", message: "Error Usuario." };
      break;
    case "auth/email-already-in-use":
      return { indice: "email", message: "Usuario ya esta registrado." };
      break;
    case "auth/invalid-email":
      return "Error en Formato de Email.";
      break;
    default:
      return "Error en backend no registrado";
      break;
  }
};

export default swicthError;

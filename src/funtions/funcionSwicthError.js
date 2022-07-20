const swicthError = (error, setError) => {
  switch (error) {
    case "auth/wrong-password":
      setError(
        "firebase",
        { type: "focus", message: "Error contraseña." },
        { shouldFocus: true }
      );
      break;
    case "auth/user-not-found":
      setError(
        "firebase",
        { type: "focus", message: "Error Usuario." },
        { shouldFocus: true }
      );
      break;
    case "auth/email-already-in-use":
      setError(
        "firebase",
        { type: "focus", message: "Usuario ya esta registrado." },
        { shouldFocus: true }
      );
      break;

    case "auth/invalid-email":
      setError(
        "firebase",
        { type: "focus", message: "Error en Formato de Email." },
        { shouldFocus: true }
      );
      break;

    default:
      return "";
      break;
  }
};

export default swicthError;

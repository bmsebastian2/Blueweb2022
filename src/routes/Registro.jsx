import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { UserContext } from "../context/UserProvider";
import { swicthError } from "../funtions/mainFunction";
import FormError from "../components/FormError";
import FormInput from "../components/FormInput";
import { formValidate } from "../funtions/mainFunction";

const Registro = () => {
  const { required, patternEmail, validateEquals, minLength, validateBlanco } =
    formValidate();
  const { registerUser } = useContext(UserContext);
  const navegate = useNavigate();

  const {
    getValues,
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const onSubmit = async ({ email, password }) => {
    try {
      await registerUser(email, password);
      alert("Usuario registrado");
    } catch (error) {
      swicthError(error.code, setError);
    }
  };

  return (
    <>
      <h1>registro</h1>
      <form onSubmit={handleSubmit(onSubmit)}>        
        <FormInput
          type="email"
          placeholder="Ingrese Email"
          {...register("email", {
            required,
            pattern: patternEmail,
          })}
        />
        <FormError error={errors.email} />
        <FormInput
          type="password"
          placeholder="Ingrese password"
          {...register("password", {
            minLength,
            validate: validateBlanco,
          })}
        />
        <FormError error={errors.password} />

        <FormInput
          type="password"
          placeholder="Ingrese password"
          {...register("repassword", {
            validate: validateEquals(getValues),
          })}
        />
        <FormError error={errors.repassword} />
        <button type="submit">Registro</button>
      </form>
    </>
  );
};

export default Registro;

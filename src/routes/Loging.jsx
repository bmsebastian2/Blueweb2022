import React, { useContext} from "react";
import { UserContext } from "../context/UserProvider";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { swicthError } from "../funtions/mainFunction";
import FormError from "../components/FormError";
import FormInput from "../components/FormInput";
import { formValidate } from "../funtions/mainFunction";

const Loging = () => {
  const { required, patternEmail, minLength, validateBlanco } = formValidate();

  const { logingUser } = useContext(UserContext);
  const navegate = useNavigate();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const onSubmit = async ({ email, password }) => {
    try {
      await logingUser(email, password);
      alert("Usuario Logeado");
      navegate("/sistema");
    } catch (error) {
      swicthError(error.code, setError);
    }
  };

  return (
    <>
      <h1>Loging</h1>
      <FormError error={errors.firebase} />
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
        <button type="submit">Loging</button>
      </form>
    </>
  );
};

export default Loging;

import React, { useContext } from "react";
import { UserContext } from "../context/UserProvider";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { swicthError } from "../funtions/mainFunction";
import FormError from "../components/FormError";
import FormInput from "../components/FormInput";
import { formValidate } from "../funtions/mainFunction";
import TextForm from "../components/TextForm";
import ButtonCustom from "../components/ButtonCustom";

const Loging = () => {
  const { required, patternEmail, funcMinlength, validateBlanco } =
    formValidate();

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
      const { indice, message } = swicthError(error.code);
      setError(indice, { type: "focus", message }, { shouldFocus: true });
    }
  };

  return (
    <>
      <TextForm title="Logging de Usuario:" />
      <FormError error={errors.firebase} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          type="email"
          placeholder="Ingrese Email"
          errorC={errors.email}
          {...register("email", {
            required,
            pattern: patternEmail,
          })}
        />
        <FormError error={errors.email} />
        <FormInput
          type="password"
          placeholder="Ingrese password"
          errorC={errors.password}
          {...register("password", {
            minLength: funcMinlength(6),
            validate: validateBlanco,
          })}
        />
        <FormError error={errors.password} />
        <ButtonCustom type="submit" name={"Logging"} />
      </form>
    </>
  );
};

export default Loging;

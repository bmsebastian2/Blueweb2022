import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { UserContext } from "../context/UserProvider";
import { swicthError } from "../funtions/mainFunction";
import FormError from "../components/FormError";
import FormInput from "../components/FormInput";
import { formValidate, setColorError } from "../funtions/mainFunction";
import TextForm from "../components/TextForm";
import ButtonCustom from "../components/ButtonCustom";

const Registro = () => {
  const {
    required,
    patternEmail,
    validateEqual,
    funcMinlength,
    validateBlanco,
  } = formValidate();
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
      navegate("/");
      alert("Usuario registrado");
    } catch (error) {
      const { indice, message } = swicthError(error.code);
      setError(indice, { type: "focus", message }, { shouldFocus: true });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextForm title="Registro de Usuario" />
        <FormError error={errors.firebase} />
        <FormInput
          type="email"
          label="Ingrese Email:"       
          errorC={setColorError(errors.email)}
          {...register("email", {
            required,
            pattern: patternEmail,
          })}
        />
        <FormError error={errors.email} />
        <FormInput
          type="password"
          label="Ingrese Password:"          
          errorC={setColorError(errors.password)}
          {...register("password", {
            minLength: funcMinlength(6),
            validate: validateBlanco,
          })}
        />
        <FormError error={errors.password} />
        <FormInput
          type="password"
          label="Repite contraseña:"
          errorC={setColorError(errors.repassword)}
          {...register("repassword", {
            validate: validateEqual(getValues("password")),
          })}
        />
        <FormError error={errors.repassword} />
        <ButtonCustom type="submit" name="Registro" />
      </form>
    </>
  );
};

export default Registro;

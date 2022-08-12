import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserProvider";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import FormError from "../components/FormError";
import FormInput from "../components/FormInput";
import TextForm from "../components/TextForm";
import ButtonCustom from "../components/ButtonCustom";
import Loading from "../components/Loading";

import { swicthError } from "../funtions/mainFunction";
import { formValidate, setColorError } from "../funtions/mainFunction";

const Loging = () => {
  const [statusLoading, setstatusLoading] = useState(false);
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
    setstatusLoading(true);
    try {
      await logingUser(email, password);
      alert("Usuario Logeado");
      navegate("/sistema");
    } catch (error) {
      const { indice, message } = swicthError(error.code);
      setError(indice, { type: "focus", message }, { shouldFocus: true });
    } finally {
      setstatusLoading(false);
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
          errorC={setColorError(errors.email)}
          {...register("email", {
            required,
            pattern: patternEmail,
          })}
        />
        <FormError error={errors.email} />
        <FormInput
          type="password"
          placeholder="Ingrese password"
          errorC={setColorError(errors.password)}
          {...register("password", {
            minLength: funcMinlength(6),
            validate: validateBlanco,
          })}
        />
        <FormError error={errors.password} />
        {statusLoading ? (
          <Loading />
        ) : (
          <ButtonCustom type="submit" name={"Loging"} />
        )}
      </form>
    </>
  );
};

export default Loging;

import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserProvider";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import InputEmail from "../components/InputEmail";
import InputPassword from "../components/InputPassword";
import { swicthError } from "../funtions/mainFunction";

const Loging = () => {
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
      {errors.firebase && <p>{errors.firebase.message}</p>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputEmail register={register} />
        {errors.email && <p>{errors.email.message}</p>}

        <InputPassword register={register} />
        {errors.password && <p>{errors.password.message}</p>}
        <button type="submit">Loging</button>
      </form>
    </>
  );
};

export default Loging;

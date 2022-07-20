import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { UserContext } from "../context/UserProvider";
import InputEmail from "../components/InputEmail";
import InputPassword from "../components/InputPassword";
import InputRepassword from "../components/InputRepassword";
import { swicthError } from "../funtions/mainFunction";

const Registro = () => {
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
        {errors.firebase && <p>{errors.firebase.message}</p>}
        <InputEmail register={register} />
        {errors.email && <p>{errors.email.message}</p>}

        <InputPassword register={register} />
        {errors.password && <p>{errors.password.message}</p>}

        <InputRepassword register={register} getValues={getValues} />
        {errors.repassword && <p>{errors.repassword.message}</p>}

        <button type="submit">Registro</button>
      </form>
    </>
  );
};

export default Registro;

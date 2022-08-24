import React from "react";
import TextForm from "../components/TextForm";
import GetList from "../hooks/GetList";

const Inicio = () => {
  return (
    <>
      <TextForm title="Inicio" />
      <GetList url="urls" />
    </>
  );
};

export default Inicio;

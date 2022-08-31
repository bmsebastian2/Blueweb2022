import React from "react";
import TextForm from "../components/TextForm";
import PostList from "../hooks/PostList";

const Inicio = () => {
  return (
    <>
      <TextForm title="Inicio" />
      <p>Data:</p>
      <PostList />
    </>
  );
};

export default Inicio;

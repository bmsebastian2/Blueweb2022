import React from "react";
import Inicio from "../routes/Inicio";
import Registro from "../routes/Registro";
import Loging from "../routes/Loging";
import Sistema from "../routes/Sistema";
import { Routes, Route } from "react-router-dom";
import RequireAuth from "./RequireAuth";

const RoutesPage = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="registro" element={<Registro />} />
        <Route path="loging" element={<Loging />} />;
        <Route
          path="sistema"
          element={
            <RequireAuth>
              <Sistema />
            </RequireAuth>
          }
        />
        ;
      </Routes>
    </div>
  );
};

export default RoutesPage;

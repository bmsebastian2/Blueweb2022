import React from "react";
import Inicio from "../routes/Inicio";
import Registro from "../routes/Registro";
import Loging from "../routes/Loging";
import Sistema from "../routes/Sistema";
import { Routes, Route } from "react-router-dom";
import RequireAuth from "./RequireAuth";
import LayoutContainer from "./LayoutContainer";

const RoutesPage = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/" element={<LayoutContainer />}>
          <Route path="registro" element={<Registro />} />
          <Route path="loging" element={<Loging />} />;
        </Route>
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

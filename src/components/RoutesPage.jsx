import React from "react";
import Inicio from "../routes/Inicio";
import Registro from "../routes/Registro";
import Loging from "../routes/Loging";
import Sistema from "../routes/Sistema";
import { Routes, Route } from "react-router-dom";
import LayoutContainer from "./layout/LayoutContainer";
import LayaoutAuthentics from "./layout/LayaoutAuthentics";
import EditUser from "../routes/EditUser";

const RoutesPage = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/" element={<LayoutContainer />}>
          <Route path="registro" element={<Registro />} />
          <Route path="loging" element={<Loging />} />;
        </Route>
        <Route path="/" element={<LayaoutAuthentics />}>
          <Route path="sistema" element={<Sistema />} />
          <Route path="edituser" element={<EditUser />} />
        </Route>
      </Routes>
    </div>
  );
};

export default RoutesPage;

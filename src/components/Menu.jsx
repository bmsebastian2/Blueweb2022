import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserProvider";
import "../Styles/Menu.css";
NavLink;

const Menu = () => {
  const { user, logoutUser } = useContext(UserContext);
  const navigate = useNavigate();
  const handleClick = async () => {
    try {
      await logoutUser();
      alert("Usuario deslogeado");
    } catch (error) {
      alert(error.code);
    }
    navigate("/");
  };
  return (
    <div>
      <nav>
        <NavLink to="/">Inicio</NavLink> |{" "}
        <NavLink to="registro">Registro</NavLink>|{" "}
        <NavLink to="loging">Loging</NavLink>|{" "}
        <NavLink to="sistema">Sistema</NavLink>
      </nav>
      {user && <button onClick={handleClick}>Logout</button>}
      {!user ? <p>-</p> : <p>+</p>}
    </div>
  );
};

export default Menu;

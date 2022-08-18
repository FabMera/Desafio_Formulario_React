import React from "react";
import { useState } from "react";
import Button from "./Button";

const InputPrueba = (props) => {
  const [usuario, setUsuario] = useState({
    user: "",
    password: "",
  });

  //observar cambios//
  const handleFormulario = (e) => {
    const { name, value } = e.target;
    setUsuario((prevUser) => ({ ...prevUser, [name]: value }));
    console.log(usuario);
  };


  //validaciones
  const messageNombre = () => {
    return usuario.user === "" ? alert("debe ingresar un nombre") : null;
  };
  const messagePass = () => {
    return usuario.password === ""
      ? alert("debe ingresar una contraseña")
      : null;
  };

  return (
    <>
      <form>
        <h2>{props.titulo}</h2>
        <div className="form-group">
          <label className="form-label">Nombre de usuario:</label>
          <input
            onClick={messageNombre}
            value={usuario.user}
            onChange={handleFormulario}
            placeholder="Ingrese un nombre"
            className="form-control"
            name="user"
          />
          <label className="form-label">Ingrese una contraseña:</label>
          <input
            onClick={messagePass}
            value={usuario.password}
            onChange={handleFormulario}
            type="password"
            placeholder="Ingrese contraseña"
            className="form-control"
            name="password"
          />
          {usuario.password === "252525" && usuario.user !== "" ? (
            <Button></Button>
          ) : null}
        </div>
      </form>
    </>
  );
};

export default InputPrueba;

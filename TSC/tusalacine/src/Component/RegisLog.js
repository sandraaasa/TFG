import React, { useState, useRef, useContext } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Messages } from "primereact/messages";
import { Divider } from "primereact/divider";
import { Password } from "primereact/password";
import { Calendar } from "primereact/calendar";
import Global from "../Global";
import axios from "axios";
import "../assets/css/router.css";
import { useNavigate } from "react-router-dom";
import UserContext from "../Context/UserContext";

const Regislog = () => {
  const url = Global.url;
  const navigate = useNavigate();
  const [emailReg, setEmailReg] = useState("");
  const [emailLog, setEmailLog] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [passwordLog, setPasswordLog] = useState("");
  const [usernameReg, setUsernameReg] = useState("");
  const [dateReg, setDateReg] = useState(null);
  const [isLogin, setIsLogin] = useState(true);
  const msgLog = useRef(null);
  const msgReg = useRef(null);
  const { login } = useContext(UserContext);

  const correcto = (mensaje) => {
    if (isLogin) {
      msgLog.current.show({
        severity: "info",
        summary: "Info",
        detail: mensaje,
        life: 1000,
      });
    } else {
      msgReg.current.show({
        severity: "info",
        summary: "Info",
        detail: mensaje,
      });
    }
  };
  const erroneo = (mensaje) => {
    if (isLogin) {
      msgLog.current.show({
        severity: "error",
        summary: "Error",
        detail: mensaje,
      });
    } else {
      msgReg.current.show({
        severity: "error",
        summary: "Error",
        detail: mensaje,
      });
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    let UserData = {};
    axios.post(url + "getuseremail/", { correo: emailLog, password: passwordLog })
      .then((res) => {
        console.log('hola');
        const { nombre, rol, correo } = res.data;
        console.log(res.data);
        correcto(" Inicio de sesión correcto!");
        UserData = {
          id: 1,
          correo: correo,
          nombre: nombre,
          rol: rol,
        };

        return UserData;
      })
      .then((resData) => {
        login(resData);
        navigate("/Catalogo");
      })
      .catch((Error) => {
        erroneo(" Inicio de sesión erroneo!");
        console.log(Error);
      });
  };

  const handleRegistro = (e) => {
    e.preventDefault();
    const usuario = {
      nombre: usernameReg,
      rol: "cliente",
      correo: emailReg,
      password: passwordReg,
      cumple: dateReg,
    };
    axios.post(url + "adduser", usuario)
      .then((res) => {
        console.log(res.data);
        correcto(" Registro correcto!");
        cambiarPestaña();
      })
      .catch((er) => {
        erroneo(" Registro erroneo!");
      });
  };

  const cambiarPestaña = () => {
    setIsLogin(!isLogin);
  };

  const footer = (
    <>
      <Divider />
      <p className="mt-2">Debe tener: </p>
      <ul className="pl-2 ml-2 mt-0 line-height-3">
        <li>Mínimo una minúscula</li>
        <li>Mínimo una mayúscula</li>
        <li>Mínimo un número</li>
        <li>Mínimo 8 caracteres</li>
      </ul>
    </>
  );

  return (
    <div className="container">
      <Card className="card">
        <div className="lg:flex align-content-center justify-content-evenly">
          <form
            onSubmit={handleLogin}
            className={
              isLogin
                ? "card backMBlack w-full h-full shadow-7"
                : "card backBlack w-full h-full"
            }
          >
            <h2 className="pb-4 w-full" onClick={cambiarPestaña}>
              Login
            </h2>
            <span className="p-float-label">
              <InputText
                id="emailLog"
                name="emailLog"
                type="email"
                disabled={!isLogin}
                value={emailLog}
                onChange={(e) => setEmailLog(e.target.value)}
                className="w-full"
              />
              <label htmlFor="emailLog">Correo</label>
            </span>
            <br />
            <span className="p-float-label">
              <Password
                id="passwordLog"
                name="passwordLog"
                disabled={!isLogin}
                value={passwordLog}
                onChange={(e) => setPasswordLog(e.target.value)}
                footer={footer}
                toggleMask
                className="w-full"
                inputClassName="w-full p-3 "
              />
              <label htmlFor="passwordLog">Contraseña</label>
            </span>
            <br />
            <Messages ref={msgLog} /> <br />
            <Button
              disabled={!isLogin}
              className="my-2 w-full"
              label="Login"
              type="submit"
            />
          </form>

          <div className="w-full lg:w-2">
            <Divider layout="vertical" className="hidden lg:flex">
              <b>OR</b>
            </Divider>
            <Divider
              layout="horizontal"
              className="flex lg:hidden"
              align="center"
            >
              <b>OR</b>
            </Divider>
          </div>

          <form
            onSubmit={handleRegistro}
            className={
              !isLogin
                ? "card backMBlack w-full h-full shadow-7"
                : "card backBlack w-full h-full"
            }
          >
            <h2 className="pb-4 w-full" onClick={cambiarPestaña}>
              Registro
            </h2>
            <span className="p-float-label">
              <InputText
                required
                disabled={isLogin}
                id="usernameReg"
                name="usernameReg"
                type="text"
                value={usernameReg}
                onChange={(e) => setUsernameReg(e.target.value)}
                className="w-full"
              />
              <label htmlFor="usernameReg">Usuario</label>
            </span>
            <br />
            <span className="p-float-label">
              <InputText
                required
                disabled={isLogin}
                id="emailReg"
                name="emailReg"
                type="text"
                value={emailReg}
                onChange={(e) => setEmailReg(e.target.value)}
                className="w-full"
              />
              <label htmlFor="emailReg">Correo electrónico</label>
            </span>
            <br />
            <span className="p-float-label">
              <Password
                toggleMask
                required
                id="passwordReg"
                name="passwordReg"
                value={passwordReg}
                disabled={isLogin}
                onChange={(e) => setPasswordReg(e.target.value)}
                footer={footer}
                className="w-full"
                inputClassName="w-full p-3 "
              />
              <label htmlFor="passwordReg">Contraseña</label>
            </span>
            <br />
            <span className="p-float-label">
              <Calendar
                required
                disabled={isLogin}
                id="dateReg"
                name="dateReg"
                value={dateReg}
                onChange={(e) => setDateReg(e.value)}
                className="w-full"
              />
              <label htmlFor="dateReg">Fecha de cumpleaños</label>
            </span>
            <br />
            <Messages ref={msgReg} /> <br />
            <Button
              disabled={isLogin}
              className="my-2 w-full"
              label="Registro"
              type="submit"
            />
          </form>
        </div>
        <div className="p-text-center ">
          <span className="m-1">
            {isLogin ? "¿No tienes una cuenta aún?" : "¿Ya tienes una cuenta? "}
          </span>
          <Button
            label={isLogin ? " Regístrate aquí" : " Inicia sesión aquí"}
            onClick={cambiarPestaña}
            className="p-button-link m-0 p-0"
          />
        </div>
      </Card>
    </div>
  );
};

export default Regislog;

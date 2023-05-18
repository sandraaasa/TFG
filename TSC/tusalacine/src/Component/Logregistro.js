import React, {useState} from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";

const LoginRegister = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showDialog, setShowDialog] = useState(false);

  const toggleLoginRegister = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowDialog(true);
  };

  const hideDialog = () => {
    setShowDialog(false);
  };

  return (
    <div className="container">
      <Card title={isLogin ? "Iniciar sesión" : "Registrarse"}>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="input-group">
              <label htmlFor="name">Nombre</label>
              <input type="text" id="name" name="name" />
            </div>
          )}
          <div className="input-group">
            <label htmlFor="email">Correo electrónico</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password" name="password" />
          </div>
          <Button
            type="submit"
            label={isLogin ? "Iniciar sesión" : "Registrarse"}
          />
        </form>
        <p>
          {isLogin ? "¿No tienes una cuenta?" : "¿Ya tienes una cuenta?"}{" "}
          <span onClick={toggleLoginRegister}>
            {isLogin ? "Regístrate aquí." : "Inicia sesión aquí."}
          </span>
        </p>
      </Card>
      <Dialog
        header={isLogin ? "Iniciando sesión..." : "Registrando..."}
        visible={showDialog}
        onHide={hideDialog}
      >
        <p>Por favor, espere un momento.</p>
      </Dialog>
    </div>
  );
};

export default LoginRegister;
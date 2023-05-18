import React, { useState, useRef }from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Toast } from 'primereact/toast';

const Regislog = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const toast = useRef(null);

  const showSuccessMessage = (message) => {
    toast.current.show({
      severity: 'success',
      summary: 'Success',
      detail: message,
      life: 3000
    });
  };

  const handleLogin = () => {
    // Aquí puedes agregar la lógica para el inicio de sesión
    showSuccessMessage('LogeoCorrecto!');
  };

  const handleRegister = () => {
    // Aquí puedes agregar la lógica para el registro de usuario
    showSuccessMessage('Registered successfully!');
  };

  const cambiarPestaña = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="login-register-component">
      <Toast ref={toast} />

      <Card title={isLogin ? 'Login' : 'Register'} className="login-register-card">
        <div className="p-fluid">
          <span className="p-float-label">
            <InputText id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <label htmlFor="username">Username</label>
          </span>

          <div className="p-field">
            <label htmlFor="password">Password</label>
            <InputText
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <Button className="p-mt-2"
            label={isLogin ? 'Login' : 'Register'}
            onClick={isLogin ? handleLogin : handleRegister}
            
          />
        </div>

        <div className="p-text-center ">
          <span className='m-1'>{isLogin ? "No tienes una cuenta aún?" : "Ya tienes una cuenta? "}</span>
          <Button
            label={isLogin ? ' Registrate aquí' : ' Inicia sesión aquí'}
            onClick={cambiarPestaña}
            className="p-button-link m-0 p-0"
          />
        </div>
      </Card>
    </div>
  );
};
 
export default Regislog;

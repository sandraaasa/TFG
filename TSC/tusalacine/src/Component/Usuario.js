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
    showSuccessMessage('LogueoCorrecto!');
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
      
    </div>
  );
};
 
export default Regislog;
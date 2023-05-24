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


  const cambiarPestaña = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="login-register-component">
      
    </div>
  );
};
 
export default Regislog;
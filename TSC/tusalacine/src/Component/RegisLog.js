import React, { useState, useRef } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Toast } from 'primereact/toast';
import { Divider } from 'primereact/divider';
import { Password } from 'primereact/password';
import { Calendar } from 'primereact/calendar';
import '../assets/css/router.css';


const Regislog = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState(null);
  const [isLogin, setIsLogin] = useState(true);
  const [blocked, setBlocked] = useState(false);
  const toast = useRef(null);

  const showSuccessMessage = (message) => {
    toast.current.show({
      severity: 'success',
      summary: 'Success',
      detail: message,
      life: 10000
    });
  };

  const handleLogin = () => {
    // Aquí puedes agregar la lógica para el inicio de sesión
    showSuccessMessage('LogueoCorrecto!');
  };

  const handleRegistro = () => {
    // Aquí puedes agregar la lógica para el registro de usuario
    showSuccessMessage('Registered successfully!');
  };

  const cambiarPestaña = () => {
    setIsLogin(!isLogin);
    setBlocked(!blocked)
  };

  const footer = (
    <>
      <Divider />
      <p className="mt-2">Debe tene: </p>
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
      <Toast ref={toast} />

      <Card className="card">
        <div className='lg:flex align-content-center justify-content-evenly'>
          <form className={isLogin ? "card backMBlack w-full h-full shadow-7" : "card backBlack w-full h-full"}>

            <h2 className="pb-4">Login</h2>
            <span className="p-float-label">
              <InputText id="email" type="email" disabled={!isLogin} value={email} keyfilter={/[^s]/} onChange={(e) => setEmail(e.target.value)} className='w-full' />
              <label htmlFor="email">Correo</label>
            </span><br />
            <span className="p-float-label">
              <Password id="pass" disabled={!isLogin} value={password} keyfilter={/[^s]/} onChange={(e) => setPassword(e.target.value)} footer={footer} toggleMask className='w-full' inputClassName='w-full p-3 ' />
              <label htmlFor="pass">Contraseña</label>
            </span><br />
            <Button
              disabled={!isLogin}
              className="my-2 w-full"
              label='Login'
              onClick={handleLogin}
            />
          </form>

          <div className="w-full lg:w-2">
            <Divider layout="vertical" className="hidden lg:flex">
              <b>OR</b>
            </Divider>
            <Divider layout="horizontal" className="flex lg:hidden" align="center">
              <b>OR</b>
            </Divider>
          </div>

          <form className={!isLogin ? "card backMBlack w-full h-full shadow-7" : "card backBlack w-full h-full"}>

            <h2 className="pb-4">Registro</h2>
              <span className="p-float-label">
                <InputText disabled={isLogin} id="username" type="text" keyfilter={/[^s]/} onChange={(e) => setUsername(e.target.value)} className='w-full' />
                <label htmlFor="username">Usuario</label>
              </span><br />
              <span className="p-float-label">
                <InputText disabled={isLogin} id="email" type="email" keyfilter={/[^s]/} onChange={(e) => setEmail(e.value)} className='w-full' />
                <label htmlFor="email">Correo electrónico</label>
              </span><br />
              <span className="p-float-label">
                <Password id="password" disabled={isLogin} keyfilter={/[^s]/} onChange={(e) => setPassword(e.target.value)} footer={footer} toggleMask className='w-full' inputClassName='w-full p-3 ' />
                <label htmlFor="password">Contraseña</label>
              </span><br />
              <span className="p-float-label">
                <Calendar disabled={isLogin} id="birthday" keyfilter={/[^s]/} onChange={(e) => setDate(e.value)} className='w-full' />
                <label htmlFor="birthday">Cumpleaños</label>
              </span><br />
              <Button disabled={isLogin} className="my-2 w-full"
                label='Registro'
                onClick={handleRegistro}
              />
            </form>
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

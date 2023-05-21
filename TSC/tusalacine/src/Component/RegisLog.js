import React, { useState, useRef } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Toast } from 'primereact/toast';
import { Divider } from 'primereact/divider';
import { Password } from 'primereact/password';
import { Calendar } from 'primereact/calendar';
import Global from '../Global';
import axios from 'axios';
import '../assets/css/router.css';


const Regislog = () => {
  const url = Global.url;

  const [emailReg, setEmailReg] = useState('');
  const [emailLog, setEmailLog] = useState('');
  const [passwordReg, setPasswordReg] = useState('');
  const [passwordLog, setPasswordLog] = useState('');
  const [usernameReg, setUsernameReg] = useState('');
  const [dateReg, setDateReg] = useState(null);
  const [isLogin, setIsLogin] = useState(true);
  const toast = useRef(null);

  const showSuccessMessage = (message) => {
    toast.current.show({
      severity: 'success',
      summary: 'Success',
      detail: message
    });
  };

  const handleLogin = (e) => {
    // Aquí puedes agregar la lógica para el inicio de sesión
    showSuccessMessage('Logueo Correcto!');
  };

  const handleRegistro = (e) => {
    // Aquí puedes agregar la lógica para el registro de usuario
    e.preventDefault();
    const usuario = {
      nombre: usernameReg,
      rol: "cliente",
      correo: emailReg,
      password: passwordReg,
      cumple: dateReg
    }
    console.log(usuario)
    console.log(emailLog)
     axios.post(url + 'adduser', usuario).then(res => {

      console.log(res.data);
    })  
    showSuccessMessage('Registro correcto!');
  };

  const cambiarPestaña = () => {
    setIsLogin(!isLogin);
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
              <InputText id="emailLog" name="emailLog" type="email" disabled={!isLogin} value={emailLog} keyfilter={/[^s]/} onChange={(e) => setEmailLog(e.target.value)} className='w-full' />
              <label htmlFor="emailLog">Correo</label>
            </span><br />
            <span className="p-float-label">
              <Password id="passwordLog" name="passwordLog" disabled={!isLogin} value={passwordLog} keyfilter={/[^s]/} onChange={(e) => setPasswordLog(e.target.value)} footer={footer} toggleMask className='w-full' inputClassName='w-full p-3 ' />
              <label htmlFor="passwordLog">Contraseña</label>
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

          <form onSubmit={handleRegistro} className={!isLogin ? "card backMBlack w-full h-full shadow-7" : "card backBlack w-full h-full"}>

            <h2 className="pb-4">Registro</h2>
            <span className="p-float-label">
              <InputText disabled={isLogin} id="usernameReg" name='usernameReg' type="text" value={usernameReg} keyfilter={/[^s]/} onChange={(e) => setUsernameReg(e.target.value)} className='w-full' />
              <label htmlFor="usernameReg">Usuario</label>
            </span><br />
            <span className="p-float-label">
              <InputText disabled={isLogin} id="emailReg" name='emailReg' type="text" value={emailReg} keyfilter={/[^s]/} onChange={(e) => setEmailReg(e.target.value)} className='w-full' />
              <label htmlFor="emailReg">Correo electrónico</label>
            </span><br />
            <span className="p-float-label">
              <Password id="passwordReg" name='passwordReg' value={passwordReg} disabled={isLogin} keyfilter={/[^s]/} onChange={(e) => setPasswordReg(e.target.value)} footer={footer} toggleMask className='w-full' inputClassName='w-full p-3 ' />
              <label htmlFor="passwordReg">Contraseña</label>
            </span><br />
            <span className="p-float-label">
              <Calendar disabled={isLogin} id="dateReg" name='dateReg' value={dateReg} keyfilter={/[^s]/} onChange={(e) => setDateReg(e.value)} className='w-full' />
              <label htmlFor="dateReg">Cumpleaños</label>
            </span><br />
            <Button
              disabled={isLogin}
              className="my-2 w-full"
              label='Registro'
              type='submit'
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

import React, { useState, useRef } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Messages } from 'primereact/messages';
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
  const msgLog = useRef(null);
  const msgReg = useRef(null);

  const correcto = (message) => {
    if (isLogin) {
      msgLog.current.show({
        severity: 'info',
        summary: 'Info',
        detail: message, 
        life: 1000
      });

    } else {
      msgReg.current.show({
        severity: 'info',
        summary: 'Info',
        detail: message
      });

    }
  };
  const erroneo = (message) => {

    if (isLogin) {
      msgLog.current.show({
        severity: 'error',
        summary: 'Error',
        detail: message
      });
    } else {

      msgReg.current.show({
        severity: 'error',
        summary: 'Error',
        detail: message
      });
    }
  };

  const handleLogin = (e) => {
    // Aquí puedes agregar la lógica para el inicio de sesión
    e.preventDefault();
    axios.post(url + 'getuseremail/', {correo: emailLog, password: passwordLog}).then(res => {

      const { nombre, rol, correo } = res.data
      console.log(res.data);
      correcto(' Login correcto!');
      localStorage.setItem('correo', correo);
      localStorage.setItem('nombre', nombre);
      localStorage.setItem('rol', rol);
      
    })
    .catch(Error => {
      console.log(Error.message);
      erroneo(' Login erroneo!');

    })

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
    axios.post(url + 'adduser', usuario)
      .then(res => {
        console.log(res.data);
        correcto(' Registro correcto!');
        cambiarPestaña();
      })
      .catch(Error => {

        console.log(Error.data);
        erroneo(' Registro erroneo!');

      })
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

      <Card className="card">
        <div className='lg:flex align-content-center justify-content-evenly'>
          <form onSubmit={handleLogin} className={isLogin ? "card backMBlack w-full h-full shadow-7" : "card backBlack w-full h-full"}>

            <h2 className="pb-4">Login</h2>
            <span className="p-float-label">
              <InputText id="emailLog" name="emailLog" type="email" disabled={!isLogin} value={emailLog} onChange={(e) => setEmailLog(e.target.value)} className='w-full' />
              <label htmlFor="emailLog">Correo</label>
            </span><br />
            <span className="p-float-label">
              <Password id="passwordLog" name="passwordLog" disabled={!isLogin} value={passwordLog} onChange={(e) => setPasswordLog(e.target.value)} footer={footer} toggleMask className='w-full' inputClassName='w-full p-3 ' />
              <label htmlFor="passwordLog">Contraseña</label>
            </span><br />
            <Messages ref={msgLog} /> <br />
            <Button
              disabled={!isLogin}
              className="my-2 w-full"
              label='Login'
              type='submit'
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
              <InputText required disabled={isLogin} id="usernameReg" name='usernameReg' type="text" value={usernameReg} onChange={(e) => setUsernameReg(e.target.value)} className='w-full' />
              <label htmlFor="usernameReg">Usuario</label>
            </span><br />
            <span className="p-float-label">
              <InputText required disabled={isLogin} id="emailReg" name='emailReg' type="text" value={emailReg} onChange={(e) => setEmailReg(e.target.value)} className='w-full' />
              <label htmlFor="emailReg">Correo electrónico</label>
            </span><br />
            <span className="p-float-label">
              <Password toggleMask required id="passwordReg" name='passwordReg' value={passwordReg} disabled={isLogin} onChange={(e) => setPasswordReg(e.target.value)} footer={footer} className='w-full' inputClassName='w-full p-3 ' />
              <label htmlFor="passwordReg">Contraseña</label>
            </span><br />
            <span className="p-float-label">
              <Calendar required disabled={isLogin} id="dateReg" name='dateReg' value={dateReg} onChange={(e) => setDateReg(e.value)} className='w-full' />
              <label htmlFor="dateReg">Cumpleaños</label>
            </span><br />
            <Messages ref={msgReg} /> <br />
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

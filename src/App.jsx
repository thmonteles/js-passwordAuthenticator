import React, { useState } from 'react';
import { BiUserCircle } from 'react-icons/bi';
import { BsKey } from "react-icons/bs";
import './App.css';
import profile from './img/undraw_profile_pic_re_iwgo.svg';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className="container">
      <div className="componentes">
        <div className="img">
          <img src={profile} alt="Descrição da imagem" />
        </div>
        <p className="p-1">User login</p>
      </div>

      <form onSubmit={handleSubmit} >
        <div className="infos">
          <div className="item">
            <div className='input-container'>
            <BiUserCircle className="input-icon" color='blue' />
            <input
              type="text"
              id="nome"
              value={username}
              onChange={handleUsernameChange}
              placeholder="username" required
            />
            </div>
          </div>
        
          <div className="item">
            <div className='input-container'>
            <BsKey className="input-icon" color='blue' />
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="password" required
            />
            </div>
          </div>
        </div>
        <div className="button">
          <button className="submit" type="submit">
            Login
          </button>
          <p className="create" type="submit">
            new account
          </p>
        </div>
      </form>
    </div>
  )
}

export default App;

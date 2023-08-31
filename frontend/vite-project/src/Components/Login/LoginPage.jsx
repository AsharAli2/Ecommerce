import React, { useState } from 'react';
import './LoginPage.css'; 
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

    const [userName, setuserName] = useState("");
    const [password, setpassword] = useState("");
    const textchange = (ev) => {
      const { value, name } = ev.target;
      if (name === "userName") {
        setuserName(value);
      }
      if (name === "password") {
        setpassword(value);
      }
      
    };
    const submit = async () => {
      const userData={userName,password};
      const response= await fetch('https://ecom-be-one.vercel.app/user/login',{
        method:"POST",
        headers:{
            'Content-Type':"application/json",

        },
        body: JSON.stringify(userData)
      })
      const data = await response.json()
      console.log(data.User);
      if(data.User){
        localStorage.setItem('user',JSON.stringify(data.User.isUser))
        localStorage.setItem('token',JSON.stringify(data.token))
        navigate("/addproduct")
      }
      
    }



  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <input
          type="username"
          name="userName"
          placeholder="Username"
          value={userName}
          onChange={textchange}
        />
        <input
          type="Password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={textchange}
        />
        <button onClick={submit}>Login</button>
        </div>
    </div>
  );
};

export default LoginPage;

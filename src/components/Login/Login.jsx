import React, { useState, useEffect } from "react";
import style from "./Login.module.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("users"));

    if (storedData) {
      setEmail("");
      setPassword("");
    }
  }, []);

  function handleLogin(e) {
    e.preventDefault();
    const newErrors = {};

    if (!email.includes("@")) {
      newErrors.email = "Please enter a valid email";
    }

    if (password === "") {
      newErrors.password = "Please enter a password";
    }

    if (Object.keys(newErrors).length === 0) {
      const storedData = JSON.parse(localStorage.getItem("users"));
      window.location.reload();

      if (storedData && storedData.length > 0) {
        const userFound = storedData.some((user) => {
          return user.email === email && user.password === password;
        });

        if (userFound) {
          toast.success('Login Successful');
          
        } else {
          toast.error('Login credentials do not match');
        }
      } else {
        toast.error("User data not found. Please sign up.");
      }
    }

    setErrors(newErrors);
  }

  return (
    <div className={style.wrapper}>
      <form action="" className={style.login_form} onSubmit={handleLogin}>
        <div className={style.email_input}>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className={style.error}>{errors.email}</p>}
        </div>
        <div className={style.password_input}>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p className={style.error}>{errors.password}</p>}
        </div>
        <button className={style.login_btn}>Login</button>
        <div className={style.not_account}>
          <span>Create an account</span>
          <span>Signup now</span>
        </div>
      </form>
      <ToastContainer />
      
    </div>
  );
};

export default Login;

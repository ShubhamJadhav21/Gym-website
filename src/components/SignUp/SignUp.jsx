import React, { useState } from "react";
import style from "./SignUp.module.css";
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  function getData(e) {
    e.preventDefault();
    const newErrors = {};

    if (name === "" || name.length < 2) {
      newErrors.name = "Please enter a valid name";
    }

    if (!email.includes("@")) {
      newErrors.email = "Please enter a valid email";
    }

    if (password.length < 6) {
      newErrors.password = "Please enter a valid password";
    }

    if (Object.keys(newErrors).length === 0) {
      const user = {
        name,
        email,
        password,
      };
      const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

      const updatedUsers = [...existingUsers, user];

      localStorage.setItem("users", JSON.stringify(updatedUsers));
      setName("");
      setEmail("");
      setPassword("");
      toast.success('Sign up successfully')
    }

    setErrors(newErrors);
  }

  return (
    <div className={style.wrapper}>
      <form action="" className={style.signup_form}>
        <div className={style.name_input}>
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <p className={style.error}>{errors.name}</p>}
        </div>
        <div className={style.email_input}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className={style.error}>{errors.email}</p>}
        </div>
        <div className={style.password_input}>
          <input
            type="password"
            placeholder="Create Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p className={style.error}>{errors.password}</p>}
        </div>

        <button className={style.signup_btn} onClick={getData}>
          SignUp
        </button>
        <div className={style.account}>
          <span>Already have an account</span>
          <span>Login</span>
        </div>
      </form>
      <ToastContainer/>
    </div>
  );
};

export default SignUp;

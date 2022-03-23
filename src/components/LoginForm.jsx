import React, { useState, useEffect } from "react";
import { validate } from "../utils/validation";
import styles from "./SignUpForm.module.css";
import {Link} from "react-router-dom";


const LoginForm = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  useEffect(() => {
    setErrors(validate(data , "login"));
  }, [data]);

  const changeHandler = (evant) => {
      setData({ ...data, [evant.target.name]: evant.target.value });
  };

  const touchHandler = (evant) => {
    setTouched({ ...touched, [evant.target.name]: true });
  };

  const submitHandler = (evant) => {
    evant.preventDefault();
    if (Object.keys(errors).length)
      setTouched({
        email: true,
        password: true,
      });
  };

  return (
    <div className={styles.container}>
      <form className={styles.form_container} onSubmit={submitHandler}>
      <h2 className={styles.header}>Login</h2>
     
      <div  className={styles.formField}>
        <label>E-mail</label>
        <input
        className={(errors.email && touched.email) ? styles.uncomplete : styles.formInput}
          type="text"
          name="email"
          value={data.email}
          onChange={changeHandler}
          onFocus={touchHandler}
        />
        {errors.email && touched.email && <span>{errors.email}</span>}
      </div>
      <div  className={styles.formField}>
        <label>Password</label>
        <input
        className={(errors.password && touched.password) ? styles.uncomplete : styles.formInput}
          type="password"
          name="password"
          value={data.password}
          onChange={changeHandler}
          onFocus={touchHandler}
        />
        {errors.password && touched.password && <span>{errors.password}</span>}
      </div>
     
      <div className={styles.formButton}>
        <Link to="/signup">sign up</Link>
        <button type="submit" >
          submit
        </button>
      </div>
      </form>
    </div>
  );
};

export default LoginForm;

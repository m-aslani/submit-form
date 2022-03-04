import React, { useState, useEffect } from "react";
import { validate } from "../utils/validation";
import styles from "./SignUpForm.module.css"

const SignUpForm = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    checkPassword: "",
    isChecked: false,
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  useEffect(() => {
    setErrors(validate(data));
  }, [data]);

  const changeHandler = (evant) => {
    if (evant.target.name === "isChecked") {
      setData({ ...data, [evant.target.name]: evant.target.isChecked });
    } else {
      setData({ ...data, [evant.target.name]: evant.target.value });
    }
  };

  const touchHandler = (evant) => {
    setTouched({ ...touched, [evant.target.name]: true });
  };

  const submitHandler = (evant) => {
    evant.preventDefault();
    if (Object.keys(errors).length)
      setTouched({
        name: true,
        email: true,
        password: true,
        checkPassword: true,
        isChecked: true,
      });
  };

  return (
    <div className={styles.container}>
      <form className={styles.form_container} onSubmit={submitHandler}>
      <h2 className={styles.header}>Sign Up</h2>
      <div className={styles.formField}>
        <label>Name</label>
        <input
        className={(errors.name && touched.name) ? styles.uncomplete : styles.formInput}          
          type="text"
          name="name"
          value={data.name}
          onChange={changeHandler}
          onFocus={touchHandler}
        />
        {errors.name && touched.name && <span>{errors.name}</span>}
      </div>
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
      <div  className={styles.formField}>
        <label>Confirm Password</label>
        <input
        className={(errors.checkPassword && touched.checkPassword) ? styles.uncomplete : styles.formInput}
          type="password"
          name="checkPassword"
          value={data.checkPassword}
          onChange={changeHandler}
          onFocus={touchHandler}
        />
        {errors.checkPassword && touched.checkPassword && (
          <span>{errors.checkPassword}</span>
        )}
      </div>
      <div  className={styles.formField}>
        <div className={styles.checkBoxContainer}>
        <label>I accepted all terms of privacy policy</label>
        <input
          type="checkbox"
          name="isChecked"
          value={data.isChecked}
          onChange={changeHandler}
          onFocus={touchHandler}
        />
        </div>
        {errors.isChecked && touched.isChecked && (
          <span>{errors.isChecked}</span>
        )}
      </div>
      <div className={styles.formButton}>
        <a href="#">Login</a>
        <button type="submit" >
          submit
        </button>
      </div>
      </form>
    </div>
  );
};

export default SignUpForm;

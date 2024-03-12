import React from "react";
import styles from "./index.module.scss";
import InputForms, { FormType } from "../../components/InputForms";

const LoginPage = () => {
  return (
    <div className={styles.app}>
      <div className={styles.logoContainer}>
        <div className={styles.logo} />
      </div>
      <InputForms type={FormType.Login} />
    </div>
  );
};

export default LoginPage;

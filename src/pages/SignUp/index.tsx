import React from "react";

import AuthenticationForm, { FormType } from "../../components/AuthenticationForm";
import Layout from "../../components/Layout";

import styles from "./index.module.scss";

const SignUpPage = () => {
  const passwordRegex = /^(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,12}$/;
  const handleSignUp = (email: string, password: string) => {
    console.log("email:" + email);
    console.log("password:" + password);
    // handel api call here
    return false;
  };

  return (
    <Layout>
      <div className={styles.app}>
        <div className={styles.logoContainer}>
          <div className={styles.logo} />
        </div>
        <AuthenticationForm pageType={FormType.SignUp} handelSubmit={handleSignUp} passwordRegex={passwordRegex} />
      </div>
    </Layout>
  );
};

export default SignUpPage;

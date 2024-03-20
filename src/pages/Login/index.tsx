import React from "react";

import AuthenticationForm, { FormType } from "../../components/AuthenticationForm";
import Layout from "../../components/Layout";

import styles from "./index.module.scss";

const handleLogin = (email: string, password: string) => {
  console.log("email:" + email);
  console.log("password:" + password);
  return true;
  // handel api call here
};

const LoginPage = () => {
  const passwordRegex = /.*/;
  return (
    <Layout>
      <div className={styles.app}>
        <div className={styles.titleContainer}>
          <span className={styles.title}>Login</span>
        </div>
        <AuthenticationForm pageType={FormType.Login} handelSubmit={handleLogin} passwordRegex={passwordRegex} />
      </div>
    </Layout>
  );
};

export default LoginPage;

import React from "react";

import AuthenticationForm, { FormType } from "../../components/AuthenticationForm";
import Layout from "../../components/Layout";

import styles from "./index.module.scss";

const LoginPage = () => {
  return (
    <Layout>
      <div className={styles.app}>
        <div className={styles.logoContainer}>
          <div className={styles.logo} />
        </div>
        <AuthenticationForm type={FormType.Login} />
      </div>
    </Layout>
  );
};

export default LoginPage;

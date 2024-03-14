import React from "react";

import AuthenticationForm, { FormType } from "../../components/AuthenticationForm";
import Layout from "../../components/Layout";

import styles from "./index.module.scss";

const SignUpPage = () => {
  return (
    <Layout>
      <div className={styles.app}>
        <div className={styles.logoContainer}>
          <div className={styles.logo} />
        </div>
        <AuthenticationForm type={FormType.SignUp} />
      </div>
    </Layout>
  );
};

export default SignUpPage;

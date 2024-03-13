import React from "react";

import InputForms, { FormType } from "../../components/InputForms";
import Layout from "../../components/Layout";

import styles from "./index.module.scss";

const SignUpPage = () => {
  return (
    <Layout>
      <div className={styles.app}>
        <div className={styles.logoContainer}>
          <div className={styles.logo} />
        </div>
        <InputForms type={FormType.SignUp} />
      </div>
    </Layout>
  );
};

export default SignUpPage;

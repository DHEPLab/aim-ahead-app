import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import AuthenticationForm, { FormType } from "../../components/AuthenticationForm";
import Layout from "../../components/Layout";
import { signup } from "../../services/useUserService";

import styles from "./index.module.scss";

const SignUpPage = () => {
  const nav = useNavigate();
  const [slot, setSlot] = useState<React.ReactNode>(null);
  const passwordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[[!@#$%^&*()\-_+=.<>/?[]{}]"'])[A-Za-z\d\[!@#$%^&*()\-_+=.<>/?[]{}]"']{8,128}$/;

  const handleSignUp = (email: string, password: string) =>
    signup(email, password)
      .then(() => {
        nav("/login");
      })
      .catch((error) => {
        setSlot(<div className={styles.error}>{error.message}</div>);
      });

  const handleFormchange = () => {
    setSlot(null);
  };

  return (
    <Layout>
      <div className={styles.app}>
        <div className={styles.titleContainer}>
          <span className={styles.title}>Sign Up</span>
        </div>
        <AuthenticationForm
          slot={slot}
          onChange={handleFormchange}
          pageType={FormType.SignUp}
          handelSubmit={handleSignUp}
          passwordRegex={passwordRegex}
        />
      </div>
    </Layout>
  );
};

export default SignUpPage;

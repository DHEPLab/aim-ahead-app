import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import AuthenticationForm, { FormType } from "../../components/AuthenticationForm";
import Layout from "../../components/Layout";
import { signup } from "../../services/useUserService";
import { passwordPattern } from "../../utils/regexp";
import path from "../../routes/path";

import styles from "./index.module.scss";

const SignUpPage = () => {
  const nav = useNavigate();
  const [slot, setSlot] = useState<React.ReactNode>(null);

  const handleSignUp = (email: string, password: string) =>
    signup(email, password)
      .then(() => {
        nav(path.login);
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
          passwordRegex={passwordPattern}
        />
      </div>
    </Layout>
  );
};

export default SignUpPage;

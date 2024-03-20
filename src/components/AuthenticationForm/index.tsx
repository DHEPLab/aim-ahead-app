import React, { useState } from "react";
import { Button, FormControl, IconButton, InputAdornment, OutlinedInput } from "@mui/material";

import styles from "./index.module.scss";
import { Visibility, VisibilityOff } from "@mui/icons-material";

interface AuthenticationFormProps {
  pageType: FormType;
  passwordRegex: RegExp;
  handelSubmit: (email: string, password: string) => boolean;
}

export enum FormType {
  Login,
  SignUp,
}

const AuthenticationForm = ({ pageType, passwordRegex, handelSubmit }: AuthenticationFormProps) => {
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [showPassword, setShowPassword] = React.useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isSignUpPage = pageType === FormType.SignUp;

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setIsEmailValid(true);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    setIsPasswordValid(true);
  };

  const validateAndSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    validateEmail();
    validatePassword();
    handelSubmit(email, password);
  };

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailRegex.test(email));
  };

  const validatePassword = () => {
    setIsPasswordValid(passwordRegex.test(password));
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <form className={styles.form} onSubmit={validateAndSubmit}>
      <FormControl className={styles.formController}>
        <label className={styles.inputLabel} htmlFor="email" data-testid="email-label">
          Email
        </label>
        <OutlinedInput
          id="email"
          inputProps={{ "data-testid": "email-input" }}
          required
          error={!isEmailValid}
          value={email}
          className={styles.emailInput}
          sx={isEmailValid ? { marginBottom: "20px" } : {}}
          onChange={handleEmailChange}
          placeholder="Enter Email"
        />
        {!isEmailValid && (
          <span className={styles.invalidEmailText}>Invalid email address. Please correct and try again.</span>
        )}
      </FormControl>
      <FormControl
        className={styles.formController}
        sx={isSignUpPage && !isPasswordValid ? { marginBottom: "10px" } : { marginBottom: "50px" }}
      >
        <label className={styles.inputLabel} htmlFor="password-input" data-testid="password-label">
          Password
        </label>
        <OutlinedInput
          id="password-input"
          inputProps={{ "data-testid": "password-input" }}
          value={password}
          error={!isPasswordValid}
          type={showPassword ? "text" : "password"}
          onChange={handlePasswordChange}
          required
          className={styles.passwordInput}
          placeholder="Enter Password"
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
        {isSignUpPage && !isPasswordValid && (
          <span className={styles.passwordRuleText}>
            Password should be 8-12 characters and at least include one special character
          </span>
        )}
      </FormControl>

      <a className={styles.redirectText} href={pageType === FormType.SignUp ? "/login" : "/signup"}>
        {isSignUpPage ? "Go Login>>" : "Go Sign Up>>"}
      </a>
      <div className={styles.buttonContainer}>
        <Button className={styles.button} variant="contained" type="submit" disabled={email === "" || password === ""}>
          {isSignUpPage ? "Sign Up" : "Login"}
        </Button>
      </div>
    </form>
  );
};

export default AuthenticationForm;

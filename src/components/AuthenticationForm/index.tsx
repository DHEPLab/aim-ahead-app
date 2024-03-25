import React, { useState } from "react";
import { Button, CircularProgress, FormControl, IconButton, InputAdornment, OutlinedInput } from "@mui/material";

import styles from "./index.module.scss";
import { Visibility, VisibilityOff } from "@mui/icons-material";

interface AuthenticationFormProps {
  pageType: FormType;
  passwordRegex: RegExp;
  handelSubmit: (email: string, password: string) => Promise<void>;
  slot?: React.ReactNode;
  onChange?: () => void;
}

export enum FormType {
  Login,
  SignUp,
}

const AuthenticationForm = ({ pageType, passwordRegex, handelSubmit, slot, onChange }: AuthenticationFormProps) => {
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [showPassword, setShowPassword] = React.useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitLoading, setSubmitLoading] = useState(false);

  const isSignUpPage = pageType === FormType.SignUp;

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.();
    setEmail(event.target.value);
    setIsEmailValid(true);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.();
    setPassword(event.target.value);
    setIsPasswordValid(true);
  };

  const validateAndSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validateEmail() && validatePassword()) {
      setSubmitLoading(true);
      try {
        await handelSubmit(email, password);
      } catch (e) {}
      setSubmitLoading(false);
    }
  };

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email);
    setIsEmailValid(isValid);
    return isValid;
  };

  const validatePassword = () => {
    const isValid = passwordRegex.test(password);
    setIsPasswordValid(isValid);
    return isValid;
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <form className={styles.form} onSubmit={validateAndSubmit} data-testid={"form"}>
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
      <FormControl className={styles.formController} sx={{ marginBottom: "30px" }}>
        <label className={styles.inputLabel} htmlFor="password-input" data-testid="password-label">
          Password
        </label>
        <OutlinedInput
          id="password-input"
          inputProps={{ "data-testid": "password-input", maxLength: 128 }}
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
                data-testid="password-visibility-button"
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
          <span className={isPasswordValid ? styles.passwordRuleText : styles.invalidPasswordText}>
            Passwords must have at least 8 characters and contain at least a letter, a number and a symbol. Please try
            again.
          </span>
        )}
      </FormControl>
      {slot}
      <a
        className={styles.redirectText}
        data-testid="redirect-label"
        href={pageType === FormType.SignUp ? "/login" : "/signup"}
      >
        {isSignUpPage ? "Go Login>>" : "Go Sign Up>>"}
      </a>
      <div className={styles.buttonContainer}>
        <Button
          className={styles.button}
          data-testid="button"
          variant="contained"
          type="submit"
          disabled={email === "" || password === ""}
        >
          {submitLoading ? <CircularProgress size={24} /> : isSignUpPage ? "Sign Up" : "Login"}
        </Button>
      </div>
    </form>
  );
};

export default AuthenticationForm;

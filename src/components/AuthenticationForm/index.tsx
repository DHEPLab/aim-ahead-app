import React, { useState } from "react";
import { Button, FormControl, IconButton, InputAdornment, OutlinedInput } from "@mui/material";

import styles from "./index.module.scss";
import { Visibility, VisibilityOff } from "@mui/icons-material";

interface AuthenticationFormProps {
  type: FormType;
}

export enum FormType {
  Login,
  SignUp,
}

const AuthenticationForm = ({ type }: AuthenticationFormProps) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isSignUpPage = type === FormType.SignUp;

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // 处理登录逻辑
    console.log("Email:", email);
    console.log("Password:", password);
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <FormControl sx={{ width: "100%" }}>
        <label className={styles.inputLabel} htmlFor="email" data-testid="email-label">
          Email
        </label>
        <OutlinedInput
          id="email"
          inputProps={{ "data-testid": "email-input" }}
          required
          error={false}
          value={email}
          className={styles.input}
          onChange={handleEmailChange}
          placeholder="Enter Email"
        />
      </FormControl>
      <FormControl sx={{ width: "100%" }}>
        <label className={styles.inputLabel} htmlFor="password-input" data-testid="password-label">
          Password
        </label>
        <OutlinedInput
          id="password-input"
          inputProps={{ "data-testid": "password-input" }}
          value={password}
          type={showPassword ? "text" : "password"}
          onChange={handlePasswordChange}
          required
          sx={isSignUpPage ? {} : { marginBottom: "100px" }}
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
      </FormControl>
      {isSignUpPage && (
        <p className={styles.passwordRuleText}>
          Password should be 8-12 characters and at least include one special character
        </p>
      )}
      <a className={styles.redirectText} href={type === FormType.SignUp ? "/login" : "/signup"}>
        {isSignUpPage ? "Go Login>>" : "Go Sign Up>>"}
      </a>
      <div className={styles.buttonContainer}>
        <Button className={styles.button} variant="contained" color="primary" type="submit">
          {isSignUpPage ? "Sign Up" : "Login"}
        </Button>
      </div>
    </form>
  );
};

export default AuthenticationForm;
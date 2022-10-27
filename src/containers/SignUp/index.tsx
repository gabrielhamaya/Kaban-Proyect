import Logo from "../../layouts/Logo";
import { Button, TextField, Grid, Box, Typography, Alert } from "@mui/material";
import { signInWithGoogle } from "../../firebase/googleAuth";
import { signUpWithEmail } from "../../firebase/emailAuth";
// import { signInWithEmail } from "../../firebase/emailAuth";
import "./style.css";
import { useState } from "react";
import { setActiveUser } from "../../features/userSlice";
import { useDispatch } from "react-redux";

export const SignUp = () => {
  const [signUp, setSignUp] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSingUpEmail = () => {
    signUpWithEmail(signUp.email, signUp.password);
  };

  return (
    <Grid
      container
      minHeight="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item>
        {error && <Alert severity="error">{error}</Alert>}
        <Box className="signup-box">
          <Box className="signup-logo">
            <Logo />
          </Box>
          <form>
            <Box className="signup-email">
              <TextField
                id="display-name"
                label="Display Name"
                variant="outlined"
                type="text"
              />
              <TextField
                id="email-address"
                label="Email"
                variant="outlined"
                type="email"
              />
              <TextField
                id="password"
                label="Password"
                variant="outlined"
                type="password"
              />
              <TextField
                id="confirm-password"
                label="Confirm Password"
                variant="outlined"
                type="password"
              />
              <Button
                color="primary"
                variant="contained"
                size="large"
                type="submit"
              >
                Sign Up!
              </Button>
            </Box>
          </form>
          <Box className="signup-submit">
            <Typography>- Or -</Typography>
            <Button onClick={signInWithGoogle}>Sign up with Google!</Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default SignUp;

import { Grid, Box, TextField, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { signInWithGoogle } from "../../firebase/googleAuth";
import Logo from "../../layouts/Logo";
import "./style.css";

export const Login = () => {
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    signInWithGoogle().then(() => {
      navigate("/boards");
    });
  };

  return (
    <Grid
      container
      minHeight="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item>
        <Box className="login-box">
          <Box className="login-logo">
            <Logo />
          </Box>
          <form>
            <Box className="login-email">
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

              <Button color="primary" variant="contained" size="large">
                Login!
              </Button>
            </Box>
          </form>
          <Box className="login-with">
            <Typography>- Continue with -</Typography>
            <Button onClick={handleGoogleLogin}>Google</Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;

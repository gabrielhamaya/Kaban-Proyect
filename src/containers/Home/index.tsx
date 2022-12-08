import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>Welcome! Please login or sign up!</h1>
      <Button onClick={() => navigate("/login")}>Login</Button>
      <Button onClick={() => navigate("/sign-up")}>Sign up</Button>
    </>
  );
};

export default Home;

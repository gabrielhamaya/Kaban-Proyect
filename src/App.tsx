import { Route, Routes } from "react-router-dom";
import Home from "./containers/Home";
import Login from "./containers/Login";
import NotFound from "./containers/NotFound";
import BoardSettings from "./containers/BoardSettings";
import SignUp from "./containers/SignUp";
import NavBar from "./layouts/NavBar";
import Boards from "./containers/Boards";
import UserSettings from "./containers/UserSettings";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { selectUserEmail } from "./features/userSlice";

const theme = createTheme({
  palette: {
    primary: {
      main: "#9b59b6",
    },
  },
});

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/boards" element={<NavBar />}>
          <Route index element={<Boards />} />
          <Route path=":id">
            <Route index element={<Boards />} />
            <Route path="board-settings" element={<BoardSettings />} />
          </Route>
          <Route path="user-settings" element={<UserSettings />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;

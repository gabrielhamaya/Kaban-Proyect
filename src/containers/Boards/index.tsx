import { useSelector, useDispatch } from "react-redux";
import { selectUserName, setUserLogout } from "../../features/userSlice";
import { useParams, useNavigate } from "react-router-dom";
import signOut from "../../firebase/signOut";

export const Boards = () => {
  const user = useSelector(selectUserName);
  const navigate = useNavigate();
  const { id } = useParams();

  const handleSignOut = () => {
    signOut();
    navigate("/");
  };

  return (
    <>
      <div>Board {id}</div>
      <h1>Hello {user}!</h1>
      <button onClick={handleSignOut}>Sign out</button>
    </>
  );
};

export default Boards;

import { auth } from ".";
import { setUserLogout } from "../features/userSlice";
import store from "../store";

const signOut = () =>
  auth
    .signOut()
    .then(() => {
      store.dispatch(setUserLogout());
    })
    .catch((error) => {
      alert(error.message);
    });

export default signOut;

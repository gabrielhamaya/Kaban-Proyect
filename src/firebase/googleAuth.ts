import { auth, provider } from ".";
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { setActiveUser } from "../features/userSlice";
import store from "../store";

export const signInWithGoogle = async () => {
  await signInWithPopup(auth, provider)
    .then((result) => {
      store.dispatch(
        setActiveUser({
          userName: result.user.displayName,
          userEmail: result.user.email,
        })
      );
    })
    .catch((error) => {
      alert(error.message);
    });
};

import { auth } from ".";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { store } from "../store";
import { setActiveUser } from "../features/userSlice";

export const signUpWithEmail = async (email: string, password: string) =>
  await createUserWithEmailAndPassword(auth, email, password).then((result) => {
    store.dispatch(
      setActiveUser({
        userName: result.user,
        userEmail: email,
      })
    );
  });

export const signInWithEmail = async (email: string, password: string) =>
  await signInWithEmailAndPassword(auth, email, password).then((result) => {
    store.dispatch(
      setActiveUser({
        userName: result.user,
        userEmail: email,
      })
    );
  });

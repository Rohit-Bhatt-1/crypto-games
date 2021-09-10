import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import firebase from "firebase/compat/app";
import { accessToken } from "../../../utils/constants";
import { LOGGED_IN, LOGIN_ERROR } from "../../actionTypes";

firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
});

const provider = new GoogleAuthProvider();
provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
const auth = getAuth();

export const authActionCreator = async () => {
  try {
    const data = await signInWithPopup(auth, provider);
    const user = data.user;
    localStorage.setItem(accessToken, user.accessToken);
    return { type: LOGGED_IN, payload: true };
  } catch (error) {
    return { type: LOGIN_ERROR, error: error };
  }
};

export const logout = () => {
  localStorage.clear();
  return { type: LOGGED_IN, payload: false };
};

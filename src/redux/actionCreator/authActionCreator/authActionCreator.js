import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import firebase from "firebase/compat/app";
import { accessToken } from "../../../utils/constants";

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

const authActionCreator = async () => {
  const data = await signInWithPopup(auth, provider);
  console.log(data);
  const user = data.user;
  localStorage.setItem(accessToken, user.accessToken);
  return { type: "HELLO" };
};

export default authActionCreator;

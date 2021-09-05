import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import firebase from "firebase/compat/app";
import { accessToken } from "../../utils/constants";

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

export const googleLogin = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      sessionStorage.setItem(accessToken, user.accessToken);
      console.log("userToken", user.accessToken);
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log("credentialError", credential);
      console.log("errorCode", errorCode);
      console.log("errorMessage", errorMessage);
      console.log("emailError", email);
    });
};

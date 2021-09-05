import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  //firebase config here
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

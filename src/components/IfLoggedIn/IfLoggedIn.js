import React from "react";
import { useSelector } from "react-redux";

function IfLoggedIn({ children }) {
  const loggedIn = useSelector((store) => store.authReducer);
  if (loggedIn) return children;
  return <></>;
}

export default IfLoggedIn;

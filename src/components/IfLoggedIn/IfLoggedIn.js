import React from "react";
import { accessToken } from "../../utils/constants";

function IfLoggedIn({ children }) {
  if (sessionStorage.getItem(accessToken) !== null) return children;
  return <></>;
}

export default IfLoggedIn;

import React from "react";
import { accessToken } from "../../utils/constants";

function IfGuest({ children }) {
  if (localStorage.getItem(accessToken) === null) return children;
  return <></>;
}

export default IfGuest;

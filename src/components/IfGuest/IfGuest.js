import React from "react";
import { accessToken } from "../../utils/constants";

function IfGuest({ children }) {
  if (sessionStorage.getItem(accessToken) === null) return children;
  return <></>;
}

export default IfGuest;

import React from "react";

const UseAuth = (): {
  checkAuth: () => boolean;
} => {
  const checkAuth = (): boolean => {
    // console.log("check auth");
    return true;
  };

  return {
    checkAuth,
  };
};

export default UseAuth;

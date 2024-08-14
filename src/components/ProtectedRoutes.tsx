import React from "react";
import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

type Props = {};

function ProtectedRoutes({}: Props) {
  const auth = getAuth();
  const [user, loading] = useAuthState(auth);
  const location = useLocation();

  if(loading){
    return <div>loading...</div>
  }

  return (
    <>
      {user ? <Outlet /> : <Navigate to="/login" state={{ from: location }} />}
    </>
  );
}

export default ProtectedRoutes;

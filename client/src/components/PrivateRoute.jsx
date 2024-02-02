import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";
import {
  signOutUserFailure,
  signOutUserSuccess,
  signOutUserStart,
} from "../redux/user/userSlice.js";

export default function PrivateRoute() {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const checkToken = async () => {
      try {
        const res = await fetch("/api/auth/checkToken");
        const data = await res.json();

        if (!data.success) {
          dispatch(signOutUserStart());
          dispatch(signOutUserSuccess());
        }
      } catch (error) {
        console.error("Error checking token:", error);
      }
    };

    checkToken();
  }, [dispatch]);

  return currentUser ? <Outlet /> : <Navigate to="/sign-in" />;
}

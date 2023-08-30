"use client";

import { createContext } from "react";

type AuthContextType = {
  isAuth: boolean;
};

const INITIAL_CONTEXT_VALUE: AuthContextType = { isAuth: false };

export const AuthContext = createContext<AuthContextType>(INITIAL_CONTEXT_VALUE);

import React, {createContext} from 'react';
import {Usuario} from '../interfaces/appInterfaces';

interface AuthContextProps {
  errorMessage: string;
  token: string | null;
  user: Usuario | null;
  status: 'checking' | 'authenticated' | 'not-authenticated';
  signUp: () => void;
  signIn: () => void;
  removeError: () => void;
  logout: () => void;
}

export const AuthContext = createContext({} as AuthContextProps);

export const AuthContextProvider = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};

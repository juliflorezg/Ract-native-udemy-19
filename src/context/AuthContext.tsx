import React, {createContext, useReducer} from 'react';
import cafeAPI from '../api/cafeAPI';
import {LoginData, LoginResponse, Usuario} from '../interfaces/appInterfaces';
import {authReducer, AuthState} from './authReducer';

interface AuthContextProps {
  errorMessage: string;
  token: string | null;
  user: Usuario | null;
  status: 'checking' | 'authenticated' | 'not-authenticated';
  signUp: () => void;
  signIn: (loginData: LoginData) => void;
  removeError: () => void;
  logout: () => void;
}

const authInitialState: AuthState = {
  status: 'checking',
  token: null,
  user: null,
  errorMessage: '',
};

export const AuthContext = createContext({} as AuthContextProps);

export const AuthContextProvider = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  const [state, dispatch] = useReducer(authReducer, authInitialState);

  const signUp = () => {};
  const signIn = async ({correo, password}: LoginData) => {
    try {
      const {
        data: {token, usuario},
      } = await cafeAPI.post<LoginResponse>('/auth/login', {
        correo,
        password,
      });
      dispatch({type: 'signUp', payload: {token, user: usuario}});

      // console.log(res.data);
    } catch (error) {
      console.log(error.response.data.msg);
    }
  };
  const removeError = () => {};
  const logout = () => {};
  return (
    <AuthContext.Provider
      value={{
        ...state,
        signIn,
        signUp,
        removeError,
        logout,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

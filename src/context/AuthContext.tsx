import React, {createContext, useReducer, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
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

  useEffect(() => {
    const readTokenFromStorage = async () => {
      try {
        const token = await AsyncStorage.getItem('token');

        console.log({token});

        //* no token means the user is not authenticated
        if (!token) {
          return dispatch({type: 'notAuthenticated'});
        }

        //There's a token
      } catch (error) {
        console.log(error);
      }
    };

    readTokenFromStorage();
  }, []);

  const validateToken = () => {};

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

      await AsyncStorage.setItem('token', token);

      // console.log(res.data);
    } catch (error) {
      console.log(error.response.data.msg);
      dispatch({
        type: 'addError',
        payload: error.response.data.msg || 'Wrong credentials',
      });
    }
  };
  const removeError = () => dispatch({type: 'removeError'});
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

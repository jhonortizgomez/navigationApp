import React, {createContext, useReducer} from 'react';
import {authReducer} from './authReducer';

export interface AuthState {
  isLoggedIn: boolean;
  username?: string;
  favoriteIcon?: string;
}

export const authInitialState: AuthState = {
  isLoggedIn: false,
  username: undefined,
  favoriteIcon: undefined,
};

export interface AuthContextProps {
  authState: AuthState;
  signIn: () => void;
  logout: () => void;
  changeFavoriteIcon: (iconName: string) => void;
  changeUsername: (userName: string) => void;
}

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({children}: {children: JSX.Element}) => {
  const [authState, dispatch] = useReducer(authReducer, authInitialState);

  const signIn = () => {
    dispatch({type: 'signIn'});
  };
  const logout = () => {
    dispatch({type: 'logout'});
  };

  const changeFavoriteIcon = (iconName: string) => {
    dispatch({type: 'changeFavIcon', payload: iconName});
  };

  const changeUsername = (userName: string) => {
    dispatch({type: 'changeUsername', payload: userName});
  };
  return (
    <AuthContext.Provider
      value={{
        authState,
        signIn,
        changeFavoriteIcon,
        logout,
        changeUsername,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

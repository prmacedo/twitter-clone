import React, { createContext, ReactNode, useContext, useLayoutEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { emptyUser, IUser } from "../../types/IUser";

interface UserContextProps {
  user: IUser;
  setUser: React.Dispatch<React.SetStateAction<IUser>>;
  login: Function;
  logout: Function;
  resetUser: Function;
  isLoggedIn: boolean;
}

interface UserContextProviderProps {
  children: ReactNode;
}

const UserContext = createContext<UserContextProps>({
  user: JSON.parse(String(localStorage.getItem("user"))) || emptyUser,
  setUser: () => {},
  login: () => {},
  logout: () => {},
  resetUser: () => {},
  isLoggedIn: (localStorage.getItem("user") ? true : false)
});

export function UserContextProvider({ children }: UserContextProviderProps) {
  const [ user, setUser ] = useState<IUser>(JSON.parse(String(localStorage.getItem("user"))) || emptyUser);
  const [ isLoggedIn, setIsLoggedIn ] = useState<boolean>(localStorage.getItem("user") ? true : false);
  const navigate = useNavigate();

  function login(userData: IUser) {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
    setIsLoggedIn(true);
    navigate('/');
  }

  function logout() {
    resetUser();
    navigate('/login');
  }

  function resetUser() {
    setUser(emptyUser);
    localStorage.removeItem("user");
    setIsLoggedIn(false);
  }

  useLayoutEffect(() => {
    if (localStorage.getItem("user")) {
      setUser(JSON.parse(String(localStorage.getItem("user"))));
    } else {
      setUser(emptyUser);
    }
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        login,
        logout,
        isLoggedIn,
        resetUser
      }}
    >
      { children }
    </UserContext.Provider>
  )
}

export function useUser() {
  const context = useContext(UserContext);
  const { user, setUser, login, logout, isLoggedIn, resetUser } = context;
  return { user, setUser, login, logout, isLoggedIn, resetUser };
}

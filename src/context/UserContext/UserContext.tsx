import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { emptyUser, IUser } from "../../types/IUser";

interface UserContextProps {
  user: IUser;
  setUser: React.Dispatch<React.SetStateAction<IUser>>;
  login: Function;
  logout: Function;
  isLoggedIn: boolean;
}

interface UserContextProviderProps {
  children: ReactNode;
}

const UserContext = createContext<UserContextProps>({
  user: emptyUser,
  setUser: () => {},
  login: () => {},
  logout: () => {},
  isLoggedIn: (localStorage.getItem("user") ? true : false)
});

export function UserContextProvider({ children }: UserContextProviderProps) {
  const [ user, setUser ] = useState<IUser>(emptyUser);
  const [ isLoggedIn, setIsLoggedIn ] = useState<boolean>(localStorage.getItem("user") ? true : false);
  const navigate = useNavigate();

  function login(userData: IUser) {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
    setIsLoggedIn(true);
    navigate('/');
  }

  function logout() {
    setUser(emptyUser);
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    navigate('/login');
  }

  useEffect(() => {
    if (localStorage.getItem("user")) {
      setUser(JSON.parse((localStorage.getItem("user") || '')));
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
        isLoggedIn
      }}
    >
      { children }
    </UserContext.Provider>
  )
}

export function useUser() {
  const context = useContext(UserContext);
  const { user, setUser, login, logout, isLoggedIn } = context;
  return { user, setUser, login, logout, isLoggedIn };
}

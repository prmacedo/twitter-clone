import React, { createContext, ReactNode, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { emptyUser, IUser } from "../../types/IUser";

interface UserContextProps {
  user: IUser;
  setUser: React.Dispatch<React.SetStateAction<IUser>>;
  login: Function;
  logout: Function;
}

interface UserContextProviderProps {
  children: ReactNode;
}

const UserContext = createContext<UserContextProps>({
  user: emptyUser,
  setUser: () => {},
  login: () => {},
  logout: () => {}
});

export function UserContextProvider({ children }: UserContextProviderProps) {
  const [ user, setUser ] = useState<IUser>(emptyUser);
  const navigate = useNavigate();

  function login(userData: IUser) {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
    navigate('/');
  }

  function logout() {
    setUser(emptyUser);
    localStorage.removeItem("user");
    navigate('/login');
  }

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        login,
        logout
      }}
    >
      { children }
    </UserContext.Provider>
  )
}

export function useUser() {
  const context = useContext(UserContext);
  const { user, setUser, login, logout } = context;
  return { user, setUser, login, logout };
}

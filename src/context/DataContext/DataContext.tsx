import React, { createContext, ReactNode, useContext, useState } from "react";
import { usersMock } from "../../mockup/Users";
import { IUser } from "../../types/IUser";

export interface DataContextProps {
  users: IUser[];
  setUsers: React.Dispatch<React.SetStateAction<IUser[]>>;
  getUserById: Function;
}

export interface DataContextProviderProps {
  children: ReactNode;
}

const DataContext = createContext<DataContextProps>({
  users: [],
  setUsers: () => {},
  getUserById: () => {}
});

export function DataContextProvider({ children }: DataContextProviderProps) {
  const [ users, setUsers ] = useState<IUser[]>(usersMock);

  function getUserById(id: string) {
    const user = users.find(user => user.id === id) as IUser;
    return user;
  }

  return (
    <DataContext.Provider
      value={{
        users,
        setUsers,
        getUserById
      }}
    >
      { children }
    </DataContext.Provider>
  )
}

export function useData() {
  const context = useContext(DataContext);
  const { users, setUsers, getUserById } = context;
  return { users, setUsers, getUserById };
}
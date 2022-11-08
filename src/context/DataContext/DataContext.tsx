import React, { createContext, ReactNode, useContext, useState } from "react";
import { usersMock } from "../../mockup/Users";
import { IUser } from "../../types/IUser";

export interface DataContextProps {
  users: IUser[];
  setUsers: React.Dispatch<React.SetStateAction<IUser[]>>;
}

export interface DataContextProviderProps {
  children: ReactNode;
}

const DataContext = createContext<DataContextProps>({
  users: [],
  setUsers: () => {}
});

export function DataContextProvider({ children }: DataContextProviderProps) {
  const [ users, setUsers ] = useState<IUser[]>(usersMock);

  return (
    <DataContext.Provider
      value={{
        users,
        setUsers
      }}
    >
      { children }
    </DataContext.Provider>
  )
}

export function useData() {
  const context = useContext(DataContext);
  const { users, setUsers } = context;
  return { users, setUsers };
}
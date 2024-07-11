import {
  Dispatch,
  FC,
  PropsWithChildren,
  createContext,
  useState,
} from "react";
import { APIUserType } from "../types";
import { useLocalStorage } from "../hooks/useLocalStorage";

type AppContextType = {
  users: APIUserType[];
  setUsers?: Dispatch<APIUserType[]>;

  createUser?: (user: APIUserType) => APIUserType;
  deleteUser?: (user: APIUserType) => void;
  editUser?: (user: APIUserType) => void;
  getUser?: (email: string) => APIUserType | undefined;
};

export const AppContext = createContext<AppContextType>({
  users: [],
});

export const AppContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const { get, set } = useLocalStorage();

  const [users, setUsers] = useState<APIUserType[]>(
    get("users") || []
  );

  const createUser = (user: APIUserType) => {
    const updatedUsers = [...users, user];

    setUsers(updatedUsers as Array<APIUserType>);
    set("users", updatedUsers);

    return user;
  };

  const deleteUser = (user: APIUserType) => {
    // TODO: Add types aligment
    const updatedUsers = (users as Array<APIUserType>).filter(
      ({ email }) => email !== user.email
    );

    setUsers(updatedUsers as Array<APIUserType>);
    set("users", updatedUsers);
  };

  const editUser = (userData: APIUserType) => {
    const updatedUsers = users.map((user) =>
      user.email === userData.email ? userData : user
    );

    setUsers(updatedUsers as APIUserType[]);
    set("users", updatedUsers);
  };

  const getUser = (email: string) => {
    return users.find(
      (user: APIUserType) => user.email === email
    );
  };

  return (
    <AppContext.Provider
      value={{ users, setUsers, createUser, deleteUser, editUser, getUser }}
    >
      {children}
    </AppContext.Provider>
  );
};

import { useEffect, useState } from "react";
import { UsersList } from "./UsersList";
import { users } from "../constants";
import { client } from "../axios";
import { APIUserType, UserVariationsType } from "../types";

export const Users = () => {
  const [usersType, setUsersType] = useState<UserVariationsType>("local");
  const userTypes: UserVariationsType[] = ["local", "server"];

  const [serverUsers, setServerUsers] = useState<APIUserType[]>([]);

  const changeUserType = (userType: UserVariationsType) =>
    setUsersType(userType);

  useEffect(() => {
    client.get("/users").then(({ data }) => {
      setServerUsers(data);
    });
  }, []);

  return (
    <div>
      <nav>
        {userTypes.map((type) => (
          <button
            key={type}
            className={type === usersType ? "active-tab" : "tab"}
            onClick={() => changeUserType(type)}
          >
            {type}
          </button>
        ))}
      </nav>
      <UsersList users={usersType === "local" ? users : serverUsers} />
    </div>
  );
};

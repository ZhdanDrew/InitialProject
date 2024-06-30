import { FC } from "react";
import { APIUserType, UserType } from "../types";

type Props = {
  users: UserType[] | APIUserType[];
};

export const UsersList: FC<Props> = ({ users }) => {

  return (
    <div>
      {users.map((user) => (
        <div key={user.email}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
};

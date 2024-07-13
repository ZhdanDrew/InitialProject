import { FC, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { APIUserType, UserType } from "../types";
import {
  Button,
  Card,
  Dropdown,
  DropdownButton,
  FormControl,
  Row,
} from "react-bootstrap";
import { AppContext } from "../contexts/AppContext";
import { useNavigate } from "react-router-dom";

type Props = {
  users: UserType[] | APIUserType[];
};

export const UsersList: FC<Props> = ({ users }) => {
  const { deleteUser, searchUsers } = useContext(AppContext);
  const navigate = useNavigate();

  const [searchValue, setSearchValue] = useState<string>("");
  const [filteredUsers, setFilteredUsers] = useState<APIUserType[]>([]);
  const [searchCriteria, setSearchCriteria] =
    useState<keyof APIUserType>("email");

  useEffect(() => {
    if (searchValue) {
      const usersAfterFilter = searchUsers!(
        searchValue,
        searchCriteria,
        users as APIUserType[]
      );

      setFilteredUsers(usersAfterFilter as APIUserType[]);
    }
  }, [searchCriteria, searchUsers, searchValue, users]);

  console.log(searchCriteria, "searchCriteria");

  // Memorization hooks
  const complicatedObject = useMemo(
    () => ({
      name: "obj1",
      data: {
        items: [1, 1, 1, 1, 1, 1],
      },
      posts: [{ title: "Title" }],
      sayHello() {
        console.log("Hello");
      },
    }),
    [searchCriteria]
  );

  const complicatedFunction = useCallback((a: number) => {
    if (searchCriteria === "phone") {
      // for (let i = 0; i < 10000000; i++) {
      //   console.log(i);
      // }
    }
  }, [searchCriteria]);

  console.log("re-rendered", complicatedObject);

  // ref
  const divRef = useRef<HTMLDivElement | null>(null);
  const userDataRef = useRef({ name: "Igor", number: 1 });

  // Virtual DOM
  // DOM

  return (
    <div ref={divRef}>
      <div className="w-100 d-flex gap-2 flex-row align-center">
        <FormControl
          className="w-50"
          type="text"
          placeholder="Search users by"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />

        {users.length > 0 && (
          <DropdownButton title={searchCriteria} defaultValue={searchCriteria}>
            {Object.keys(users[0]).map((key) => (
              <Dropdown.Item
                key={key}
                onClick={() => setSearchCriteria(key as keyof APIUserType)}
              >
                {key}
              </Dropdown.Item>
            ))}
          </DropdownButton>
        )}
      </div>
      {(searchValue ? filteredUsers : users).map((user, i) => (
        <Card
          key={`${user.email}-${i}`}
          className="mt-3"
          style={{ width: "18rem" }}
        >
          <Card.Body>
            <Card.Title>{user.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {user.email}
              <p>{"phone" in user && user.phone}</p>
            </Card.Subtitle>
          </Card.Body>
          <Card.Footer>
            {!("age" in user) && (
              <>
                <Button
                  onClick={() => deleteUser && deleteUser(user)}
                  variant="danger"
                >
                  Delete
                </Button>
                <Button
                  className="ms-2"
                  variant="success"
                  onClick={() => navigate(`/user-edit/${user.email}`)}
                >
                  Edit
                </Button>
              </>
            )}
          </Card.Footer>
        </Card>
      ))}
    </div>
  );
};

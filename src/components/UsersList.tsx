import { FC, useContext, useRef } from "react";
import { APIUserType, UserType } from "../types";
import { Button, Card } from "react-bootstrap";
import { AppContext } from "../contexts/AppContext";
import { useNavigate } from "react-router-dom";

type Props = {
  users: UserType[] | APIUserType[];
};

export const UsersList: FC<Props> = ({ users }) => {
  const { deleteUser } = useContext(AppContext);
  const navigate = useNavigate();

  // ref 
  const divRef = useRef<HTMLDivElement | null>(null);
  const userDataRef = useRef({name: "Igor"});

  console.log(divRef.current?.innerHTML, "divRef");

  return (
    <div ref={divRef}>
      {users.map((user, i) => (
        <Card key={`${user.email}-${i}`} className="mt-3" style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>{user.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {user.email}
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

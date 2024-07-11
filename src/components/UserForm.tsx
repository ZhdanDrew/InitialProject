import React, {
  FormEventHandler,
  useContext,
  useEffect,
  useState,
} from "react";
import { Button, Container, Form } from "react-bootstrap";
import { APIUserType } from "../types";
import { AppContext } from "../contexts/AppContext";
import { useNavigate, useParams } from "react-router-dom";

export const UserForm = () => {
  const { createUser, getUser, editUser } = useContext(AppContext);

  const [userData, setUserData] = useState<APIUserType>({
    email: "",
    phone: "",
    name: "",
  });

  const navigate = useNavigate();

  const { email } = useParams();
  useEffect(() => {
    if (email) {
      const user = getUser && getUser(email);
      user && setUserData(user as APIUserType);
    }
  }, [email, getUser]);

  const onSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    email ? editUser!(userData) : createUser!(userData);

    navigate('/users');
  };

  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            value={userData.name}
            onChange={(event) =>
              setUserData({ ...userData, name: event.target.value })
            }
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Phone</Form.Label>
          <Form.Control
            value={userData.phone}
            onChange={(event) =>
              setUserData({
                ...userData,
                phone: event.target.value,
              })
            }
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            // readOnly={Boolean(email)}
            disabled={Boolean(email)}
            value={userData.email}
            onChange={(event) =>
              setUserData({
                ...userData,
                email: event.target.value.toLowerCase(),
              })
            }
          />
        </Form.Group>

        <Button type="submit" className="mt-2">
          {!email ? "Create User" : "Edit User"}
        </Button>
      </Form>
    </Container>
  );
};

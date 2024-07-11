
import { Container, Nav, Navbar } from "react-bootstrap";

export const Header = () => {
  const headerRoutes = [
    { title: "Login page", path: "/login" },
    { title: "Counter page", path: "/counter" },
    { title: "Create user", path: "/user-create" },
    { title: "Users", path: "/users" },
  ];

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Users dashboard</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {headerRoutes.map((route) => (
              <Nav.Link key={route.title} href={route.path}>
                {route.title}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

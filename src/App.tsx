import { Link } from "react-router-dom";
import { UserProfile } from "./components/UserProfile";
import { Users } from "./components/Users";
import "./App.css";

const App = () => {
  const headerRoutes = [
    { title: "Login page", path: "/login" },
    { title: "Counter page", path: "/counter" },
    { title: "Todos page", path: "/todos" },          // Added Todos route
    { title: "Todos List page", path: "/todos-list" } // Added TodosList route
  ];

  const user = {
    email: 'email@gmail.com',
    password: '',
    age: 24,
    name: 'Igor'
  };

  return (
    <div className="white">
      <h1>My first react project</h1>
      {headerRoutes.map((route) => (
        <Link key={route.title} to={route.path}>{route.title}</Link>
      ))}

      <UserProfile user={user} />

      <Users />
    </div>
  );
};

export default App;

import { createBrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Counter } from "./components/Counter";
import { LoginForm } from "./components/LoginForm";
import { UserProfile } from "./components/UserProfile";
import { UsersList } from "./components/UsersList";
import { users } from "./constants";
import { Users } from "./components/Users";
import Todos from "./components/Todos";
import TodosList from "./components/TodosList";

export const router = createBrowserRouter([
  { path: "/", element: <App /> },
  {
    path: "/counter",
    element: <Counter />,
  },
  {
    path: "/login",
    element: (
      <LoginForm email="default-email@gmail.com" password="default-password" />
    ),
  },
  {
    path: "/user-profile",
    element: <UserProfile />,
  },
  {
    path: "/users-list",
    element: <UsersList users={users} />,
  },
  {
    path: "/users",
    element: <Users />,
  },
  {
    path: "/todos",
    element: <Todos />,
  },
  {
    path: "/todos-list",
    element: <TodosList todos={[]} />, // Just a placeholder for the TodosList route
  },
]);
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodosList from './TodosList';

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const localTodos: Todo[] = [
  { userId: 1, id: 1, title: "delectus aut autem", completed: false },
  { userId: 1, id: 2, title: "quis ut nam facilis et officia qui", completed: false },
  { userId: 1, id: 3, title: "fugiat veniam minus", completed: true },
  { userId: 2, id: 4, title: "et porro tempora", completed: false },
  { userId: 2, id: 5, title: "laboriosam mollitia et enim quasi adipisci quia provident illum", completed: true }
];

const Todos: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>(localTodos);
  const [useServer, setUseServer] = useState<boolean>(false);

  useEffect(() => {
    if (useServer) {
      axios.get<Todo[]>('https://jsonplaceholder.typicode.com/todos')
        .then(response => {
          setTodos(response.data);
        })
        .catch(error => {
          console.error('Error fetching server todos', error);
        });
    } else {
      setTodos(localTodos);
    }
  }, [useServer]);

  return (
    <div>
      <button onClick={() => setUseServer(prev => !prev)}>
        {useServer ? "Use Local Todos" : "Use Server Todos"}
      </button>
      <TodosList todos={todos} />
    </div>
  );
};

export default Todos;
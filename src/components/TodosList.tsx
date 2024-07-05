import React from 'react';

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

interface TodosListProps {
  todos: Todo[];
}

const TodosList: React.FC<TodosListProps> = ({ todos }) => {
  if (todos.length === 0) {
    return <div>No todos available</div>;
  }

  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          {todo.title} {todo.completed ? "(Completed)" : "(Incomplete)"}
        </li>
      ))}
    </ul>
  );
};

export default TodosList;

import { useState } from 'react';
import InputTodo from './InputTodo';
import TodoList from './TodoList';

const TodoLogic = () => {
  const [todos, setTodos] = useState([
    { id: 1, task: 'setup project', completed: true },
    { id: 2, task: 'create components', completed: false },
    { id: 3, task: 'integrate components', completed: false }]);
  console.log(todos);

  const handleChange = (id) => {
    setTodos((prevState) => prevState.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    }));
  };

  return (
    <>
      <div className="todo-logic">
        <InputTodo />
        <TodoList todoItems={todos} handleChange={handleChange} />
      </div>
    </>
  );
};

export default TodoLogic;

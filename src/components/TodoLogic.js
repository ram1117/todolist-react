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

  const delTodo = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  };

  const addTodoItem = (title) => {
    const newTodo = {
      id: 4,
      task: title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  return (
    <>
      <div className="todo-logic">
        <InputTodo addTodoItem={addTodoItem} />
        <TodoList
          todoItems={todos}
          handleChange={handleChange}
          delTodo={delTodo}
        />
      </div>
    </>
  );
};

export default TodoLogic;

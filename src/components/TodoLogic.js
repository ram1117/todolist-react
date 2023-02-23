import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import InputTodo from './InputTodo';
import TodoList from './TodoList';

const TodoLogic = () => {
  const getStoredTasks = () => {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    return tasks || [];
  };
  const [todos, setTodos] = useState(getStoredTasks);

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
      id: uuidv4(),
      task: title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const updateTask = (updatedTask, id) => {
    setTodos(todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, task: updatedTask };
      }
      return todo;
    }));
  };

  useEffect(() => {
    const stringifiedTodos = JSON.stringify(todos);
    localStorage.setItem('tasks', stringifiedTodos);
  }, [todos]);

  return (
    <>
      <div className="todo-logic">
        <InputTodo addTodoItem={addTodoItem} />
        <TodoList
          todoItems={todos}
          handleChange={handleChange}
          delTodo={delTodo}
          updateTask={updateTask}
        />
      </div>
    </>
  );
};

export default TodoLogic;

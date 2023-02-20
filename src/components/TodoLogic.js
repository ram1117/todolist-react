import InputTodo from './InputTodo';
import TodoList from './TodoList';

const TodoLogic = () => {
  const todos = [
    { id: 1, task: 'setup project', completed: true }, { id: 2, task: 'create components', completed: false }, { id: 3, task: 'integrate components', completed: false }];

  return (
    <>
      <div className="todo-logic">
        <InputTodo />
        <TodoList todoItems={todos} />
      </div>
    </>
  );
};

export default TodoLogic;

import './TodoApp.css';
import TodoHeader from './TodoHeader';
import TodoLogic from './TodoLogic';

function TodoApp() {
  return (
    <div className="todoApp">
      <TodoHeader className="App-header" />
      <TodoLogic />
    </div>
  );
}

export default TodoApp;

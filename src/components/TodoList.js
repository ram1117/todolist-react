import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodoList = ({
  todoItems, handleChange, delTodo, updateTask,
}) => {
  TodoList.defaultProps = {
    todoItems: null,
    handleChange: null,
    delTodo: null,
    updateTask: null,
  };
  TodoList.propTypes = {
    todoItems: PropTypes.arrayOf(PropTypes.string),
    handleChange: PropTypes.func,
    delTodo: PropTypes.func,
    updateTask: PropTypes.func,
  };
  return (
    <ul className="todo-list">
      {
        todoItems.map((item) => (
          <TodoItem
            key={item.id}
            itemProp={item}
            handleChange={handleChange}
            delTodo={delTodo}
            updateTask={updateTask}
          />
        ))
      }
    </ul>
  );
};

export default TodoList;

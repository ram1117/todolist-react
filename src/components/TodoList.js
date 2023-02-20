import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodoList = ({ todoItems, handleChange, delTodo }) => {
  TodoList.defaultProps = {
    todoItems: null,
    handleChange: null,
    delTodo: null,
  };
  TodoList.propTypes = {
    todoItems: PropTypes.arrayOf(PropTypes.string),
    handleChange: PropTypes.func,
    delTodo: PropTypes.func,
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
          />
        ))
      }
    </ul>
  );
};

export default TodoList;

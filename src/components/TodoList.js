import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodoList = ({ todoItems, handleChange }) => {
  TodoList.defaultProps = { todoItems: null, handleChange: null };
  TodoList.propTypes = {
    todoItems: PropTypes.arrayOf(PropTypes.string),
    handleChange: PropTypes.func,
  };
  return (
    <ul className="todo-list">
      {
        todoItems.map((item) => (
          <TodoItem
            key={item.id}
            itemProp={item}
            handleChange={handleChange}
          />
        ))
      }
    </ul>
  );
};

export default TodoList;

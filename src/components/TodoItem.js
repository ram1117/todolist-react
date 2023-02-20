import PropTypes from 'prop-types';

const TodoItem = ({ itemProp, handleChange, delTodo }) => {
  TodoItem.defaultProps = {
    itemProp: null,
    handleChange: null,
    delTodo: null,
  };
  TodoItem.propTypes = {
    itemProp: PropTypes.objectOf(PropTypes.string),
    handleChange: PropTypes.func,
    delTodo: PropTypes.func,
  };

  return (
    <li className="todo-item">
      <input
        type="checkbox"
        onChange={() => handleChange(itemProp.id)}
        checked={itemProp.completed}
      />
      <input type="text" value={itemProp.task} />
      <button
        type="button"
        onClick={() => delTodo(itemProp.id)}
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;

import PropTypes from 'prop-types';

const TodoItem = ({ itemProp, handleChange }) => {
  TodoItem.defaultProps = { itemProp: null, handleChange: null };
  TodoItem.propTypes = {
    itemProp: PropTypes.objectOf(PropTypes.string),
    handleChange: PropTypes.func,
  };

  return (
    <li className="todo-item">
      <input
        type="checkbox"
        onChange={() => handleChange(itemProp.id)}
        checked={itemProp.completed}
      />
      <input type="text" value={itemProp.task} />
    </li>
  );
};

export default TodoItem;

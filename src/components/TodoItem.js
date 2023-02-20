import PropTypes from 'prop-types';

const TodoItem = ({ itemProp }) => {
  TodoItem.defaultProps = { itemProp: null };
  TodoItem.propTypes = { itemProp: PropTypes.objectOf(PropTypes.string) };
  return (
    <li className="todo-item">
      <input type="checkBox" checked={itemProp.completed} />
      <p>{itemProp.task}</p>
    </li>
  );
};

export default TodoItem;

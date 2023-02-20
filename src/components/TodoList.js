import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodoList = ({ todoItems }) => {
  TodoList.defaultProps = { todoItems: null };
  TodoList.propTypes = { todoItems: PropTypes.arrayOf(PropTypes.string) };
  return (
    <ul className="todo-list">
      {
        todoItems.map((item) => (
          <TodoItem key={item.id} itemProp={item} />
        ))
      }
    </ul>
  );
};

export default TodoList;

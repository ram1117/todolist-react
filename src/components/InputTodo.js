import { useState } from 'react';
import PropTypes from 'prop-types';

const InputTodo = ({ addTodoItem }) => {
  InputTodo.defaultProps = { addTodoItem: null };
  InputTodo.propTypes = { addTodoItem: PropTypes.func };
  const [title, setTitle] = useState('');
  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodoItem(title);
    setTitle('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          className="input-todo"
          placeholder="Enter Task.."
          value={title}
          onChange={handleChange}
        />
        <button type="submit">Add task</button>
      </form>
    </>
  );
};

export default InputTodo;

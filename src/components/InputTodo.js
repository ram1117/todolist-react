import { useState } from 'react';
import PropTypes from 'prop-types';

const InputTodo = ({ addTodoItem }) => {
  InputTodo.defaultProps = { addTodoItem: null };
  InputTodo.propTypes = { addTodoItem: PropTypes.func };
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTodoItem(title);
      setTitle('');
      setMessage('');
    } else {
      setMessage('Please add todo item:');
    }
  };

  return (
    <>
      <div className="inputTodo-wrapper">
        <form onSubmit={handleSubmit} className="inputTodo-content">
          <input
            className="input-todo"
            placeholder="Enter Task.."
            value={title}
            onChange={handleChange}
          />
          <button type="submit">Add task</button>
        </form>
      </div>
      <span>{message}</span>
    </>
  );
};

export default InputTodo;

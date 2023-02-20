import PropTypes from 'prop-types';
import { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import { AiFillEdit } from 'react-icons/ai';
import styles from '../styles/TodoItem.module.css';

const TodoItem = ({
  itemProp, handleChange, delTodo, updateTask,
}) => {
  TodoItem.defaultProps = {
    itemProp: null,
    handleChange: null,
    delTodo: null,
    updateTask: null,
  };
  TodoItem.propTypes = {
    itemProp: PropTypes.objectOf(PropTypes.string),
    handleChange: PropTypes.func,
    delTodo: PropTypes.func,
    updateTask: PropTypes.func,
  };

  const [editing, setEditing] = useState(false);

  const viewMode = {};
  const editMode = {};
  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  const handleEditing = () => {
    setEditing(true);
  };

  const handleUpdatedDone = (e) => {
    if (e.key === 'Enter') {
      setEditing(false);
    }
  };

  return (
    <li className={styles.todoItem}>
      <div className={styles['todoItem-content']} style={viewMode}>
        <input
          className={styles.checkBox}
          type="checkbox"
          onChange={() => handleChange(itemProp.id)}
          checked={itemProp.completed}
        />
        <p>
          {itemProp.task}
        </p>
        <button
          type="button"
          className={styles.todoButton}
          onClick={handleEditing}
        >
          <AiFillEdit />
        </button>
        <button
          className={styles.todoButton}
          type="button"
          onClick={() => delTodo(itemProp.id)}
        >
          <FaTrash />
        </button>
      </div>
      <input
        className={styles.todoEditText}
        type="text"
        defaultValue={itemProp.task}
        style={editMode}
        onChange={(e) => { updateTask(e.target.value, itemProp.id); }}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  );
};

export default TodoItem;

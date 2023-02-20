import styles from '../styles/TodoHeader.module.css';

const TodoHeader = () => (
  <header className={styles.header}>
    <h1>ToDo List</h1>
    <p className={styles.subheader}>Simple Todo list app using React</p>
  </header>
);

export default TodoHeader;

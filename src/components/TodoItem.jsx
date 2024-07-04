import styles from "./TodoItem.module.css";
export default function TodoItem({ item, todos, settodos }) {
  function HandleDelete(item) {
    settodos(todos.filter((todo) => todo !== item));
  }

  function handleDone(name) {
    settodos(
      todos.map((todo) =>
        todo.name === name ? { ...todo, done: !todo.done } : todo
      )
    );
  }

  const doneClass = item.done ? styles.completed : "";

  return (
    <div className={styles.item}>
      <div className={styles.itemname}>
        <span className={doneClass}>{item.name}</span>
        <span className={styles.buttons}>
          <button onClick={() => HandleDelete(item)} className={styles.delete}>
            x
          </button>
          <button onClick={() => handleDone(item.name)} className={styles.done}>
            ✅
          </button>
        </span>
      </div>
      <hr className={styles.line} />
    </div>
  );
}

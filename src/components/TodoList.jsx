import TodoItem from "./TodoItem";
import styles from "./TodoList.module.css";

export default function TodoList({ todos, settodos }) {
  const sortedtodos = todos.slice().sort((a, b) => a.done - b.done);
  return (
    <div className={styles.list}>
      {sortedtodos.map((item) => (
        <TodoItem
          key={item.name}
          item={item}
          todos={todos}
          settodos={settodos}
        />
      ))}
    </div>
  );
}

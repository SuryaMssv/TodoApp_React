import { useState } from "react";
import styles from "./Form.module.css";

export default function Form({ todos, settodos }) {
  const [todo, settodo] = useState({ name: "", done: false });
  const [placeholder, setPlaceholder] = useState("Enter an item");

  function Submit(e) {
    e.preventDefault();
    if (todo.name.trim() === "") {
      setPlaceholder("You didn't enter anything!");
      return;
    }
    settodos([...todos, todo]);
    settodo({ name: "", done: false });
    setPlaceholder("Enter an item");
  }

  return (
    <div>
      <form className={styles.Form} onSubmit={Submit}>
        <div className={styles.container}>
          <input
            placeholder={placeholder}
            className={styles.input}
            onChange={(e) => settodo({ name: e.target.value, done: false })}
            type="text"
            value={todo.name}
          />
          <button className={styles.button} type="submit">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

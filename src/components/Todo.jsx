import { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";
import Footer from "./Footer";

export default function Todo() {
  const [todos, settodos] = useState([]);

  const bak = todos.filter((todo) => todo.done).length;

  const dak = todos.length;

  return (
    <div>
      <Form todos={todos} settodos={settodos} />
      <TodoList todos={todos} settodos={settodos} />
      <Footer bak={bak} dak={dak} />
    </div>
  );
}

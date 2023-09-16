import React, { useState } from "react";
import "./App.css";
import InputField from "./Components/InputField";
import { Todo } from "./Components/Model";
import TodoList from "./Components/TodoList";

function App() {
  let [todo, setTodo] = useState<string>("");
  let [todos, setTodos] = useState<Todo[]>([]);

  // console.log(todo);
  console.log(todos);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), isDone: false, todo }]);
    }
    setTodo("")
  };

  return (
    <div className="App">
      <span className="heading"> Taskify App</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;

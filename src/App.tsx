import React, { useState } from "react";
import "./App.css";
import InputField from "./Components/InputField";
import { Todo } from "./Components/Model";

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
      <span className="heading"> Task Entry</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
    </div>
  );
}

export default App;

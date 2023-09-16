import React, { useState, useRef, useEffect, ReactHTMLElement } from "react";
import { Todo } from "./Model";
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineDone, MdDeleteOutline } from "react-icons/md";

type Props = {
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  todos: Todo[];
  todo: Todo;
};

const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [edit, setEdit] = useState<Boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const deleteHandle = (id: number) => {
    setTodos(
      todos.filter((todo) => {
        return todo.id !== id;
      })
    );
  };

  const editHandle = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };
  return (
    <form className="single_todo" onSubmit={(e) => editHandle(e, todo.id)}>
      {edit ? (
        <input
          ref={inputRef}
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
          className="single_todo--text"
        />
      ) : todo.isDone ? (
        <s className="single_todo--text"> {todo.todo}</s>
      ) : (
        <span className="single_todo--text"> {todo.todo}</span>
      )}

      <div>
        <span
          className="icon"
          onClick={() => {
            if (!edit && !todo.isDone) {
              setEdit(!edit);
            }
          }}
        >
          <AiOutlineEdit />
        </span>
        <span className="icon" onClick={() => handleDone(todo.id)}>
          <MdOutlineDone />
        </span>
        <span className="icon" onClick={() => deleteHandle(todo.id)}>
          <MdDeleteOutline />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;

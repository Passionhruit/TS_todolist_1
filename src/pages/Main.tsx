import React from "react";
import { useState } from "react";
import uuid from "react-uuid";
import ToDos from "../components/ToDos";

export interface Todos {
  id: string;
  title: string;
  note: string;
  isDone: boolean;
}

function Main() {
  const [todos, setTodos] = useState<Todos[]>([
    { id: uuid(), title: "국어", note: "글쓰기", isDone: false },
    { id: uuid(), title: "수학", note: "구구단", isDone: false },
    { id: uuid(), title: "영어", note: "단어", isDone: true },
    { id: uuid(), title: "과학", note: "실험", isDone: true },
  ]);
  const [title, setTitle] = useState<string>("");
  const [note, setNote] = useState<string>("");

  const titleHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTitle(e.target.value);
  };

  const noteHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setNote(e.target.value);
  };

  const addTodo = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    const newTodo = {
      id: uuid(),
      title,
      note,
      isDone: false,
    };
    setTodos([...todos, newTodo]);
    setTitle("");
    setNote("");
  };

  const moveTodo = (id: string): void => {
    const movedTodo = todos.map((todo) =>
      todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
    );
    setTodos(movedTodo);
  };

  const deleteTodo = (id: string): void => {
    const deletedTodo = todos.filter((todo) => todo.id !== id);
    setTodos(deletedTodo);
  };

  return (
    <>
      <h1>TO DO LIST</h1>
      <form>
        제목 : <input type="text" value={title} onChange={titleHandler} />
        내용 : <input type="text" value={note} onChange={noteHandler} />
        <button onClick={addTodo}>등록</button>
      </form>
      <ToDos
        todos={todos}
        isDone={false}
        moveTodo={moveTodo}
        deleteTodo={deleteTodo}
      />
      <ToDos
        todos={todos}
        isDone={true}
        moveTodo={moveTodo}
        deleteTodo={deleteTodo}
      />
    </>
  );
}

export default Main;

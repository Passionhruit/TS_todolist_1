import React from "react";
import { Todos } from "../pages/Main";

type MoveTodo = (id: string) => void;
type DeleteTodo = (id: string) => void;

type ToDosProps = {
  todos: Todos[];
  isDone: boolean;
  moveTodo: MoveTodo;
  deleteTodo: DeleteTodo;
};

function ToDos({ todos, isDone, moveTodo, deleteTodo }: ToDosProps) {
  return (
    <div>
      <h1>{isDone ? "Done List" : "Working List"}</h1>
      {todos
        .filter((todo) => todo.isDone === isDone)
        .map((todo) => {
          return (
            <div key={todo.id}>
              <h2>{todo.title}</h2>
              <p>{todo.note}</p>
              <button onClick={() => moveTodo(todo.id)}>
                {todo.isDone ? "진행중" : "완료"}
              </button>
              <button onClick={() => deleteTodo(todo.id)}>삭제</button>
            </div>
          );
        })}
    </div>
  );
}

export default ToDos;

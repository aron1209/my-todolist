import React, { useState } from "react";
import Form from "./Form";
import List from "./List";
import shortid from "shortid";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const addTodo = (content) => {
    setTodos([...todos, { content: content, id: shortid.generate() }]);
  };

  //指定したid以外を取り除く
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <h1>This is todo list</h1>
      <Form addTodo={addTodo} />
      <List todos={todos} deleteTodo={deleteTodo} />
    </>
  );
};

export default Todo;

import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import Todo from "./Todo";
import { TodoUbdate } from "../Actions";
export const Todolist = () => {
  const data = useSelector((state) => state.TodoData);
  const Dispatch = useDispatch();
  const [todos, setTodos] = useState(data);
  const addTodoHandler = (e) => {
    e.preventDefault();
    const children = e.target.parentElement;
    const todovalue = children.childNodes[0].value;
    const date = new Date();
    const todoData = {
      name: todovalue,
      day: date.getDate(),
      month: date.getMonth() + 1,
      year: date.getFullYear(),
    };
    Dispatch(TodoUbdate([...todos, todoData]));
    children.childNodes[0].value = "";
  };

  useEffect(() => {
    setTodos(data);
  }, [data]);

  return (
    <div className="Todo">
      <div
        className="flexbox formheader"
        style={{ justifyContent: "space-between" }}
      >
        <h3>Todo List</h3>
        <FontAwesomeIcon icon={faXmark} />
      </div>
      <div style={{ overflowY: "scroll", height: "80%" }}>
        <Todo />
      </div>

      <div className="addtodo">
        <input type="text" name="todo" id="todo" placeholder="Type Here" />
        <input
          type="submit"
          value="Add"
          onClick={(e) => {
            addTodoHandler(e);
          }}
        />
      </div>
    </div>
  );
};

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { TodoUbdate } from "../Actions";
const Todo = () => {
  const Dispatch = useDispatch();
  const todos = useSelector((state) => state.TodoData);
  const removeTodoHandler = (td) => {
    const filterTodo = todos.filter((doso) => doso.name !== td.name);
    Dispatch(TodoUbdate(filterTodo));
    console.log(filterTodo);
  };
  return (
    <div>
      {todos.map((td) => (
        <div className="flexbox todolist">
          <div>
            <h4>{td.name}</h4>
            <p className="lowlight">{`${td.day}/${td.month}/${td.year}`}</p>
          </div>
          <div>
            <button
              onClick={() => {
                removeTodoHandler(td);
              }}
            >
              Done
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Todo;

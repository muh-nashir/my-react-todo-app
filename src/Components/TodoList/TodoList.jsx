import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import PaginateList from "../PaginateList/PaginateList";

const TodoList = (props) => {
  return (
    <div className="todo-list">
      <Header title={props.title} addNewItem={props.addNewItem} />
      <ul className="list-group list-group-flush">
        <PaginateList items={props.items} initialPage={1} itemPerPage={2} />
      </ul>
      <Footer items={props.items} />
    </div>
  );
};

export default TodoList;

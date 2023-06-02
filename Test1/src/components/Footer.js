import React, { memo } from "react";

const Footer = memo((props) => {
  const {
    setStatusFilter,
    activeButton,
    clearCompleted,
    numOfTodosLeft,
    numOfTodos,
  } = props;
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{numOfTodosLeft}</strong>
        <span> </span>
        <span>{numOfTodosLeft > 1 ? "items" : "item"}</span>
        <span> left</span>
      </span>
    </footer>
  );
});

export default Footer;

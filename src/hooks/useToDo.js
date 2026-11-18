import { useState } from "react";

export const useToDo = () => {
  const [tasks, setTasks] = useState([]);
  const [toDo, setToDo] = useState("");

  const handleToDo = (e) => {
    setToDo(e.target.value);
  };

  const handleAddTasks = () => {
    if (toDo.trim() !== "") {
      setTasks((prev) => [...prev, toDo.trim()]);
    }
    setToDo("");
  };

  const handleDeleteTasks = (i) => {
    setTasks((prev) => prev.filter((_, index) => index !== i));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAddTasks();
    }
  };

  return {
    tasks,
    toDo,
    handleToDo,
    handleAddTasks,
    handleDeleteTasks,
    handleKeyDown,
  };
};

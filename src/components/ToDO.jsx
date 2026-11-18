import { useState } from "react";
import styles from "./ToDo.module.css";
import trashIcon from ".././assets/icons/trash.svg";

export const ToDo = () => {
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

  return (
    <>
      <div className={styles.container}>
        <h1>To Do List</h1>
        <div className={styles.inputBtnContainer}>
          <input
            type="text"
            value={toDo}
            onChange={handleToDo}
            onKeyDown={handleKeyDown}
            placeholder="Enter To Do..."
          />
          <button className={styles.addBtn} onClick={handleAddTasks}>
            Add Task
          </button>
        </div>

        <ul>
          {tasks.map((task, i) => (
            <li key={i}>
              {task}
              <img
                src={trashIcon}
                alt="delete icon"
                className={styles.icon}
                onClick={() => handleDeleteTasks(i)}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

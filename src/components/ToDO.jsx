import styles from "./ToDo.module.css";
import trashIcon from ".././assets/icons/trash.svg";
import { useToDo } from "../hooks/useToDo";

export const ToDo = () => {
  const {
    tasks,
    toDo,
    handleToDo,
    handleAddTasks,
    handleDeleteTasks,
    handleKeyDown,
  } = useToDo();

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

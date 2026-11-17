import { useState } from "react";
import trashIcon from ".././assets/icons/trash.svg";

export const ToDo = () => {
  const [tasks, setTasks] = useState(["wake up", "hello", "world"]);
  const [toDo, setToDo] = useState("");

  const handleAddTasks = () => {};

  const handleDeleteTasks = (index) => {};

  const handleInput = (e) => {};

  return (
    <>
      <div>
        <h1>To Do App</h1>
        <div>
          <input type="text" value={toDo} onChange={handleInput} />
          <button onClick={handleAddTasks}>Add Task</button>
        </div>
        <ul>
          {tasks.map((task, i) => (
            <li key={i}>
              {task}
              <img src={trashIcon} alt="delete icon" />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

import { useState, useEffect } from "react";
import { allTasks } from "../api/tasks";

export default function AllTask() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function getAllTasks() {
      const task = await allTasks();
      setTasks(task);
    }
    getAllTasks();
  }, []);

  return (
    <div>
      {tasks.map((ta) => {
        return (
          <div key={ta.id}>
            <h3>{ta.title}</h3>
            <h4>{ta.description}</h4>
          </div>
        );
      })}
    </div>
  );
}

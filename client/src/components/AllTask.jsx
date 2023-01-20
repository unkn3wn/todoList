import { useState, useEffect } from "react";
import { allTasks } from "../api/tasks";
import { useNavigate } from "react-router";

export default function AllTask() {
  const nav = useNavigate();
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
      <button
        onClick={() => {
          nav("/tasks/create");
        }}
      >
        CREATE TASK
      </button>
      {tasks.map((ta) => {
        return (
          <div key={ta.id}>
            <h3>{ta.title}</h3>
            <h4>{ta.description}</h4>
            <button
              onClick={(event) => {
                event.preventDefault();
                nav(`/tasks/${ta.id}`);
              }}
            >
              more about task
            </button>
          </div>
        );
      })}
    </div>
  );
}

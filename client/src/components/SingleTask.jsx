import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { singleTask, deleteTask } from "../api/tasks";

export default function SingleTask() {
  const nav = useNavigate();
  const { taskId } = useParams();
  const [detail, setDetail] = useState({});

  useEffect(() => {
    async function loadTask() {
      const result = await singleTask(taskId);
      setDetail(result);
    }
    loadTask();
  }, []);

  return (
    <div>
      <h3>TITLE:{detail.title}</h3>
      <h3>DESCRIPTION:{detail.description}</h3>
      <button
        onClick={() => {
          deleteTask(taskId);
          nav("/");
        }}
      >
        DELETE
      </button>
    </div>
  );
}

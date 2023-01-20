import { useState } from "react";
import { updateTask } from "../api/tasks";
import { useParams, useNavigate } from "react-router-dom";

export default function UpdatingTask() {
  const { taskId } = useParams();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const nav = useNavigate();
  return (
    <div>
      <h1>Edit task</h1>
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          const result = await updateTask(taskId, title, description);
          console.log(result);
          nav("/");
        }}
      >
        <input
          variant="standard"
          value={title}
          type="text"
          placeholder="Change title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          variant="standard"
          value={description}
          type="text"
          placeholder="Change description"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <button type="submit">UPATE</button>
      </form>
    </div>
  );
}

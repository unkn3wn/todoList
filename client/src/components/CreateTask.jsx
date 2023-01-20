import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createTask } from "../api/tasks";

export default function CreateTask() {
  const nav = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const result = createTask(title, description);
          setTitle("");
          setDescription("");
          console.log("Result", result);
          nav("/tasks")
        }}
      >
       {/*input for title  */}
        <label>Title</label>
        <input
          variant="standard"
          value={title}
          type="text"
          placeholder="Title of Task"
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
       {/* input for descrption */}
        <label>Description</label>
        <input
          variant="standard"
          value={description}
          type="text"
          placeholder="description of Task"
          onChange={(event) => {
            setDescription(event.target.value);
          }}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export async function allTasks() {
  const response = await fetch("/routes/tasks");
  const result = await response.json();
  return result;
}

export async function singleTask(taskId) {
  const response = await fetch(`/routes/tasks/${taskId}`);
  const result = await response.json();
  return result;
}

export async function createTask(title, description) {
  const response = await fetch("/routes/tasks/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      description,
    }),
  });
  const result = await response.json();
  return result;
}

export async function updateTask(taskId, title, description) {
  const repsonse = await fetch(`/routes/tasks/${taskId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      description,
    }),
  });
  const result = await repsonse.json();
  return result;
}

export async function deleteTask(taskId) {
  const repsonse = await fetch(`/routes/tasks/${taskId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  }); 
  const result = await repsonse.json();
  return result;
}

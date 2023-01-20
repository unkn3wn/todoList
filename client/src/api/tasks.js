export async function allTasks(){
    const response = await fetch(
        "/routes/tasks"
    )
    const result = await response.json();
    return result; 
}
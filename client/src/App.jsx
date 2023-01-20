import "./App.css";
import { Route, Routes } from "react-router-dom";
import AllTask from "./components/AllTask";
import CreateTask from "./components/CreateTask";
// SingleTask
import SingleTask from "./components/SingleTask";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/tasks" element={<AllTask />} />
        <Route path="/tasks/create" element={<CreateTask />} />
        <Route path="/tasks/:taskId" element={<SingleTask />} />
      </Routes>
    </div>
  );
}

export default App;

import "./App.css";
import { Route, Routes } from "react-router-dom";
import AllTask from "./components/AllTask";
import CreateTask from "./components/CreateTask";
// SingleTask
import SingleTask from "./components/SingleTask";
import UpdatingTask from "./components/UpdatingTask";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AllTask />} />
        <Route path="/tasks/create" element={<CreateTask />} />
        <Route path="/tasks/:taskId" element={<SingleTask />} />
        <Route path="/tasks/updating/:taskId" element={<UpdatingTask />} />
      </Routes>
    </div>
  );
}

export default App;

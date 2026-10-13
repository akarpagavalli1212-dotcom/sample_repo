import { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  // Add or Update Task
  const handleSubmit = () => {
    if (task === "") return;

    if (editIndex === null) {
      setTasks([...tasks, task]);
    } else {
      const updatedTasks = [...tasks];
      updatedTasks[editIndex] = task;
      setTasks(updatedTasks);
      setEditIndex(null);
    }

    setTask("");
  };

  // Edit Task
  const handleEdit = (index) => {
    setTask(tasks[index]);
    setEditIndex(index);
  };

  // Delete Task
  const handleDelete = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>React To-Do List</h1>

      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task"
      />

      <button onClick={handleSubmit}>
        {editIndex === null ? "Add" : "Update"}
      </button>

      <ul>
        {tasks.map((item, index) => (
          <li key={index}>
            {item}

            <button onClick={() => handleEdit(index)}>
              Edit
            </button>

            <button onClick={() => handleDelete(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

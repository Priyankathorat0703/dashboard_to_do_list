import React, { useState } from "react";

function App() {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([]);

  
  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  
  const deleteTask = (index) => {
    setTasks(tasks.filter((task, i) => i !== index));
  };

  
  const toggleCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-md rounded p-6 w-96">
        <h1 className="text-2xl font-bold text-center mb-4">To-Do List</h1>

        <div className="mb-4 flex">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Add new task..."
            className="flex-grow px-3 py-2 border border-gray-300 rounded-l focus:outline-none focus:ring focus:border-blue-500"
          />
          <button
            onClick={addTask}
            className="px-4 bg-blue-500 text-white rounded-r hover:bg-blue-600 focus:outline-none"
          >
            Add
          </button>
        </div>

        <ul className="space-y-2">
          {tasks.map((task, index) => (
            <li
              key={index}
              className={`flex justify-between items-center p-2 border border-gray-300 rounded ${
                task.completed ? "line-through text-gray-500" : ""
              }`}
            >
              <span
                onClick={() => toggleCompletion(index)}
                className="cursor-pointer"
              >
                {task.text}
              </span>
              <button
                onClick={() => deleteTask(index)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

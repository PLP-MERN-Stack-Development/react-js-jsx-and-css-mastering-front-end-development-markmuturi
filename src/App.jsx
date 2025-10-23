import { useState } from 'react'
import './index.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Card from './components/Card'

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState([]);
  const [filter, setFilter] = useState("all");

  function handleAdd() {
    const newTask = {
      id: Date.now(),
      text: input,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setInput("");
  }

  function toggleTask(id) {
    const updated = tasks.map((t) => 
    t.id === id ? {...t, completed: !t.completed} : t);
    setTasks(updated);
  }

  function deleteTask(id) {
    const remaining = tasks.filter((t) => t.id !== id);
    setTasks(remaining);
  }

  const filteredTasks = tasks.filter((t) => {
    if (filter === "all") return true;
    if (filter === "active") return !t.completed;
    if (filter === "completed") return t.completed;
  });

  return (
    <div>
      <h1> My Tasks</h1>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder='Add a Task'
      />
      <button onClick={handleAdd}>Add</button>

      <div>
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("active")}>Active</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
      </div>

      <ul>
        {filteredTasks.map((t) => (
          <li key={t.id}>
            <input
              type='checkbox'
              checked={t.completed}
              onChange={() => toggleTask(t.id)}
            />
            {t.text}
            <button onClick={() => deleteTask(t.id)}>Delete Task</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App

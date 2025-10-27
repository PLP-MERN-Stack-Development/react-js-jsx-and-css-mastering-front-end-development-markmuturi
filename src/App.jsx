import { useState, useEffect } from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Card from './components/Card';
import Button from './components/Button';
import { useTheme } from './context/ThemeContext';
import useLocalStorage from './hooks/localStorage';


function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState([]);
  const [filter, setFilter] = useState("all");
  const { theme, toggleTheme } = useTheme();

  function handleAdd() {
    if (!input.trim()) return;
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

  useEffect(() => {
    console.log('Task Manager Loaded - Current Theme:', theme);
  }, [theme]);

  return (
    <div id='top'>
      <Navbar />

      <div id='home' className='flex flex-col h-30 items-center'>
        <h1 className='text-4xl w-screen font-bold py-10 flex justify-center bg-slate-500 hover:text-white hover:bg-black duration:600 hover:scale-105 transition-all'>Task Manager 1.0</h1>
        <div className='flex items-center py-4'>
          <Button variant='secondary' onClick={toggleTheme}>
            Toggle {theme === 'light' ? 'Dark' : 'Light'} Mode
          </Button>
        </div>

        <div id='about' className='flex flex-col items-center w-screen py-20 text-2xl gap-3 '>
          <p className='font-bold font-serif'>Hello!</p>
          <p> Welcome to my simple task manager project!</p>
          <p> For this project, I've made use of React State Hooks, Tailwind CSS components and React Components to develop a simple task manager web app.</p>
          <p> Users can add, delete, update & view the statuses of the various tasks they upload.</p>
          <p> This app constitutes the submission of my Week 3 Assignment for the MERN Stack specialization under the Power Learn Project (PLP).</p>
        </div>
      </div>

      <div id='app' className='flex justify-center'>
        <Card>
          <h1 className='text-5xl flex justify-center font-black text-slate-800 py-5'> My Tasks</h1>
          <div className='flex items-center gap-2 mb-4'>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder='Add a Task'
              className={`flex-grow py-3 px-4 rounded-md border font-semibold focus:outline-none focus:ring-2
                transition-all duration-300
                ${theme === 'light'
                  ? 'bg-white text-gray-900 border-gray-300 hover:bg-gray-100 focus:ring-black'
                  : 'bg-gray-800 text-white border-gray-700 hover:bg-gray-700 focus:ring-white'}
                `}
            />
            <Button variant='primary' onClick={handleAdd}
              className='bg-black rounded-lg px-6 py-3 text-white font-semibold hover:bg-white hover:text-black hover:scale-105 transition-all'
              >
                Add
            </Button>
          </div>

          <div className='flex justify-center gap-3'>
            <Button onClick={() => setFilter("all")} >All</Button>
            <Button variant='secondary' onClick={() => setFilter("active")} >Active</Button>
            <Button variant='primary' onClick={() => setFilter("completed")} >Completed</Button>
          </div>

          <ul className='flex flex-col gap-5 py-10'>
            {filteredTasks.map((t) => (
                <li key={t.id} className={`flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-300
                ${theme === 'light' ? 'bg-gray-100 text-gray-900' : 'bg-gray-800 text-gray-200'}
                `}>
                  <div className='flex items-center gap-3'>
                    <input
                      type='checkbox'
                      checked={t.completed}
                      onChange={() => toggleTask(t.id)}
                    />
                    <span className={t.completed ? "line-through text-gray-500" : ""}>
                      {t.text}
                    </span>
                  </div>
                  <Button variant='danger' onClick={() => deleteTask(t.id)}>
                      Delete Task
                  </Button>
                </li>
            ))}
          </ul>
        </Card>
      </div>

      <Footer />

    </div>
  );
}

export default App;

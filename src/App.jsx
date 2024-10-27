import { useState } from "react"
import Task from "./components/Task"
import AddTask from "./components/AddTask";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Tarefa 1",
      description: "Descrição da tarefa 1",
      completed: true
    },
    {
      id: 2,
      title: "Tarefa 2",
      description: "Descrição da tarefa 2",
      completed: false
    },
  ]);

  function onTaskClick(id) {
    const newTask = tasks.map(task => {
      if (task.id === id) {
        return { ...task, completed: !task.completed }
      }
      return task
    });

    setTasks(newTask);
  }

  function removeTask(id) {
    const newTasks = tasks.filter(task => task.id !== id);
    setTasks(newTasks);
  }

  return (
    <div className="flex flex-col gap-2 bg-[#f5f5f5] p-4 justify-center items-center">
      <div className="bg-white p-4 rounded shadow-orange-50">
        <h1 className="text-3xl font-bold text-red-500">Gerenciador de Tarefas</h1>
        <AddTask />
        <Task tasks={tasks} onTaskClick={onTaskClick} removeTask={removeTask} />
      </div>
    </div>
  )
}

export default App


import { useState } from "react"
import Task from "./components/Task"

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
    <>
      <h1 className="text-3xl font-bold text-red-500">Gerenciador de Tarefas</h1>
      <Task tasks={tasks} onTaskClick={onTaskClick} removeTask={removeTask} />
    </>
  )
}

export default App


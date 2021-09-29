import React, { useState } from "react";
import './App.css'
import Button from "./components/button";
import Tasks from "./components/tasks";

export default function App() {

  const [tasks, setTasks] = useState([
    { id: 1, title: "Ler Livros", completed: true },
    { id: 2, title: "Estudar Programação", completed: false },
    { id: 3, title: "Dar Comida pro Gato", completed: false },
    { id: 4, title: "Tomar banho", completed: false },
    { id: 5, title: "Jantar", completed: false }])

  const [inputData, setInputData] = useState("");

  function handleTaskAdd() {
    setTasks([...tasks, { title: inputData, id: Math.random(10) }])
  }

  return (
    <>
      <div className="container">
        <h1>Minhas Tarefas</h1>
        <div className="add-task-container">
          <input type="text" className="add-task-input" onChange={(txt) => setInputData(txt.target.value)} value={inputData} />
          <div className="add-task-button-container">
            <Button onClick={handleTaskAdd}>Adicionar</Button>
          </div>
        </div>
        <Tasks tasks={tasks} />
      </div>
    </>
  )
}
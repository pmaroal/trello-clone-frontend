"use client"
import Task from "@/components/molecules/Task"; // Importando el componente Task
import { useState } from "react"; // Importando el hook useState

export default function Home() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Tarea 1", content: "Contenido de la tarea 1" },
    { id: 2, title: "Tarea 2", content: "Contenido de la tarea 2" },
    { id: 3, title: "Tarea 3", content: "Contenido de la tarea 3" },
  ]);

  const handleDelete = (taskId: number) => {
    setTasks(tasks.filter(task => task.id !== taskId)); // Filtramos las tareas para eliminar la tarea con el id correspondiente
  };

  return (
    <div className="task-list p-4">
      {tasks.map((task) => (
        <Task
          key={task.id}
          title={task.title}
          content={task.content}
          onDelete={() => handleDelete(task.id)} // Pasamos la función de eliminar
        />
      ))}
    </div>
  );
}

import "./App.css";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (e) => {
    e.preventDefault();
    const newTaskText = e.target.taskInput.value;
    if (newTaskText.trim()) {
      const newTask = { id: Date.now(), text: newTaskText, completed: false };
      setTasks([...tasks, newTask]);
      e.target.reset();
    }
  };

  const completeTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="container">
      <header>
        <h1>لیست کارها</h1>
        <p>کارهای روزانه خود را مدیریت کنید</p>
      </header>

      <main>
        <section aria-labelledby="task-form">
          <h2 id="task-form">افزودن کار جدید</h2>
          <TaskForm addTask={addTask} />
        </section>

        <section aria-labelledby="task-list">
          <h2 id="task-list">لیست کارها</h2>
          <TaskList
            tasks={tasks}
            completeTask={completeTask}
            deleteTask={deleteTask}
          />
        </section>
      </main>

      <footer>
        <p>&copy; 2024 لیست کارهای من | ساخته شده با React</p>
      </footer>
    </div>
  );
}

export default App;

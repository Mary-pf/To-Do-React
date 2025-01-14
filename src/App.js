import "./App.css";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import { useState, useEffect } from "react";
import swal from "sweetalert";

function App() {
  const [tasks, setTasks] = useState([]);

  // ویرایش تسک ها
  const [, setEditingTask] = useState(null);
  // const [editText, setEditText] = useState("");

  // محاسبه تعداد تسک ها
  const completedCount = tasks.filter((task) => task.completed).length;
  const reminingCount = tasks.length - completedCount;

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

  const editTask = (id, newText) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, text: newText } : task))
    );
    setEditingTask(null);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // نمایش پیام
  useEffect(() => {
    const allCompleted = tasks.every((task) => task.completed);
    if (tasks.length > 0 && allCompleted) {
      swal({
        title: "تبریک!",
        text: "همه تسک‌ها تکمیل شدند!",
        icon: "success",
        button: "باشه",
      });
    }
  }, [tasks]);

  return (
    <div className="container">
      <header>
        <h1>لیست کارها</h1>
        <p>کارهای روزانه خود را مدیریت کنید</p>
      </header>

      <main>
        <section aria-labelledby="task-form">
          <TaskForm addTask={addTask} />
        </section>

        <section aria-labelledby="task-list">
          <h2 id="task-list">لیست کارها</h2>
          <TaskList
            tasks={tasks}
            completeTask={completeTask}
            deleteTask={deleteTask}
            editTask={editTask}
          />
        </section>

        <section className="task-summary">
          <span>نکمیل شده: {completedCount}</span> |
          <span>باقی مانده: {reminingCount}</span>
        </section>
      </main>

      <footer>
        <p>&copy; 2024 لیست کارهای من | ساخته شده با React</p>
      </footer>
    </div>
  );
}

export default App;

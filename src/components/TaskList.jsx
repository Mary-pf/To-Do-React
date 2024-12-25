function TaskList({ tasks, completeTask, deleteTask }) {
  return (
    <ul>
      {tasks.map((task) => (
        <li
          key={task.id}
          className={task.completed ? "completed" : ""}
          aria-live="polite"
        >
          <span
            style={{ textDecoration: task.completed ? "line-through" : "none" }}
            aria-label={task.completed ? "تکمیل شده" : "در انتظار"}
          >
            {task.text}
          </span>
          <div style={{ display: "inline-flex", gap: "10px" }}>
            <button
              onClick={() => completeTask(task.id)}
              aria-label="تغییر وضعیت"
            >
              {task.completed ? "بازگشایی" : "تکمیل"}
            </button>
            {task.completed && (
              <button
                onClick={() => deleteTask(task.id)}
                aria-label="حذف وظیفه"
              >
                حذف
              </button>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
